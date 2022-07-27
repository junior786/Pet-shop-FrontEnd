import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AnimalFormComponent } from 'src/app/components/animal-form/animal-form.component';
import { ClientFormComponent } from 'src/app/components/client-form/client-form.component';
import { ClientService } from 'src/app/service/client.service';
import { ClientResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public client$?: Observable<ClientResponse[]>;

  constructor(private dialog: MatDialog, private service: ClientService) {
    this.client$ = this.service.client$;
  }

  ngOnInit(): void {
    this.service.getClient();
    this.client$?.subscribe(console.log)
  }

  openClient(): void {
    this.dialog.open(ClientFormComponent);
  }

  openAnimal(): void {
    this.dialog.open(AnimalFormComponent);
  }
}
