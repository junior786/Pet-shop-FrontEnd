import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { PageResponse } from 'src/app/service/model/client-response';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {
  @Input() page!: PageResponse;

  public arrayNumber: number[] = [];

  constructor(private service: ClientService) {
  }

  ngOnInit(): void {
    for (let index = 0; index < this.page.totalPages; index++) {
      const indice = index + 1;
      this.arrayNumber.push(indice);
    }
    if (this.page.totalPages > 10) {
      this.arrayNumber = this.arrayNumber.filter(number => number < 10)
    }


  }

  public right() {
    this.service.getClient(this.page.number + 1);
    if (this.page.totalPages >= this.arrayNumber.length && this.page.number === this.arrayNumber.length - 1) {
        this.arrayNumber.push(this.arrayNumber.length + 1);
        console.log(this.arrayNumber);
    }
  }

  public left() {
    this.service.getClient(this.page.number - 1);
  }

}
