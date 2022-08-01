import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AnimalFormComponent } from 'src/app/components/animal-form/animal-form.component';
import { ClientFormComponent } from 'src/app/components/client-form/client-form.component';
import { ClientResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public client$?: Observable<ClientResponse[]>;

  constructor(private dialog: MatDialog) {

  }

  openClient(): void {
    this.dialog.open(ClientFormComponent);
  }

  openAnimal(): void {
    this.dialog.open(AnimalFormComponent);
  }
}
