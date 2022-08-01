import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-page-unity',
  templateUrl: './page-unity.component.html',
  styleUrls: ['./page-unity.component.scss'],
})
export class PageUnityComponent implements OnInit {
  @Input()
  identify!: number;

  @Input()
  focus!: boolean;

  constructor(private service: ClientService) {}

  ngOnInit(): void {
    console.log(this.focus);

  }

  changePage() {
    if (!this.focus) this.service.getClient(this.identify - 1);
  }
}
