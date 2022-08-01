import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { catchError, EMPTY, Observable, Subject, take } from 'rxjs';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { ClientRequest } from './model/client-request';
import { ClientResponse, PageResponse } from './model/client-response';

@Injectable({ providedIn: 'root' })
export class ClientService {
  public client$? = new Subject<PageResponse>();
  public error$? = new Subject<String>();

  constructor(private request: HttpClient, private dialog: MatDialog) {}

  public getClient(page: number): void {
    this.request
      .get<PageResponse>('http://localhost:8080/api/v1/client?page=' + page)
      .pipe(take(1))
      .subscribe((data) => this.client$?.next(data));
  }

  public saveClient(client: ClientRequest) {
    this.request
      .post('http://localhost:8080/api/v1/client', client)
      .pipe(
        take(1),
        catchError((error) => {
          this.dialog.open(PopUpComponent, {
            data: {
              message: 'Error ao criar cliente',
              warning: true,
              icon: 'error',
            },
          });
          return EMPTY;
        })
      )
      .subscribe((client) => {
        this.dialog.open(PopUpComponent, {
          data: { message: 'Salvo com sucesso', warning: false, icon: 'done' },
        });
      });
  }

  public getByCpf(cpf: string): Observable<PageResponse> {
    return this.request.get<PageResponse>(
      `http://localhost:8080/api/v1/client?cpf=${cpf}`
    );
  }
}
