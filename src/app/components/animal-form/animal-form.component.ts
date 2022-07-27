import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { ClientService } from 'src/app/service/client.service';
import { ClientResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit, OnDestroy {
  private client$?: Observable<ClientResponse[]>;
  private client!: ClientResponse[];
  private subscription = new Subscription();

  public result = new Subject<string[]>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private service: ClientService) {
    this.service.getClient();
    this.client$ = this.service.client$?.asObservable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.client$?.subscribe((data) => {
        this.client = data;
        this.result?.next(data.map((client) => client.cpf));
      })
    );
    this.createForm();
    this.changeOptions();
  }

  changeOptions(): void {
    this.subscription.add(
      this.form
        .get('owner')
        ?.valueChanges.subscribe((value) =>
          this.result.next(this.filterName(value)?.map((client) => client.cpf))
        )
    );
  }

  filterName(value: string): ClientResponse[] {
    return this.client?.filter((client) =>
      client.cpf.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      type: ['', Validators.required],
      race: ['', Validators.required],
      description: ['', Validators.required],
      owner: ['', Validators.required],
    });
  }
}
