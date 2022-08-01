import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { AnimalRequest } from './model/animal-request';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private request: HttpClient, private dialog: MatDialog) { }


  public saveAnimal(animal: AnimalRequest): void {
    this.request.post<any>('http://localhost:8080/api/v1/animal', animal).subscribe(data => {
      this.dialog.open(PopUpComponent,{
        data: { message: `Salvo com sucesso`, warning: false, icon: 'done' },
      } );
    });
  }
}
