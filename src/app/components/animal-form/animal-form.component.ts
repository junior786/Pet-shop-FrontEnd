import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Subject,
  Subscription
} from 'rxjs';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  public result = new Subject<string[]>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private service: AnimalService) {
  }

  get sex(): string[] {
    return ['Masculino', 'Feminino'];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();

    this.form.valueChanges.subscribe(console.log)
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      type: ['', Validators.required],
      race: ['', Validators.required],
      description: ['', Validators.required],
      owner: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    });
  }

  public saveAnimal(): void {
    this.service.saveAnimal(this.form.getRawValue());
  }
}
