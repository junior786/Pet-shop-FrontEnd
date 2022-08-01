import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, Observable, Subject, distinctUntilChanged, map } from 'rxjs';
import { ClientService } from 'src/app/service/client.service';
import { ClientResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-select-client-container',
  templateUrl: './select-client-container.component.html',
  styleUrls: ['./select-client-container.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectClientContainerComponent,
      multi: true,
    },
  ],
})
export class SelectClientContainerComponent implements ControlValueAccessor {
  public result$?: Observable<ClientResponse[]>;

  public cpf = new Subject<string>();

  public onTouched!: () => void;

  public onChange: (value: number) => void = () => {};

  public disabled = true;

  public idClient?: number;

  constructor(private service: ClientService) {

    this.cpf
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((cpf) => {
        this.result$ = this.service.getByCpf(cpf).pipe(map(page => page.content));
        this.setValue(cpf);
      });
  }

  writeValue(obj: any): void {
    this.idClient = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(value: any) {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }
}
