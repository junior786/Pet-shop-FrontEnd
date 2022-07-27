import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  public message!: string;
  public warning!: boolean;
  public icon!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: { message: string; warning: boolean, icon: string }
  ) {
    this.message = data.message;
    this.warning = data.warning;
    this.icon = data.icon;
  }

  ngOnInit(): void {}
}
