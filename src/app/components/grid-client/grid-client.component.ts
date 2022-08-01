import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClientService } from 'src/app/service/client.service';
import { ClientResponse, PageResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-grid-client',
  templateUrl: './grid-client.component.html',
  styleUrls: ['./grid-client.component.scss']
})
export class GridClientComponent implements OnInit {

  public clients$?: Observable<ClientResponse[]>;
  public page$?: Observable<PageResponse>;

  constructor(private service: ClientService) { }

  ngOnInit(): void {
    this.service.getClient(0);
    this.page$ = this.service.client$;
    this.clients$ = this.page$?.pipe(map(page => page.content));

  }

}

