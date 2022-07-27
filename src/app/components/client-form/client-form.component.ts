import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit, OnDestroy {
  @Input()
  public text?: string;
  public form!: FormGroup;
  public spinner = false;

  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    public dialogRef: MatDialogRef<ClientFormComponent>) {
    this.createForm();
  }

  ngOnDestroy(): void {
    console.log('destruiu');
  }

  ngOnInit(): void {}

  public submit(): void {
    this.spinner = true;
    const cliente = this.form.getRawValue();
    this.service.saveClient(cliente);
    this.dialogRef.close();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }
}
