import { Component, Input, OnInit } from '@angular/core';
import { SexEnum } from 'src/app/service/enum/sex-enum';
import { ClientResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit {

  @Input()
  public client?: ClientResponse;
  public sexEnum: { [key: string]: string } = SexEnum;


  constructor() { }

  ngOnInit(): void {
  }


}
