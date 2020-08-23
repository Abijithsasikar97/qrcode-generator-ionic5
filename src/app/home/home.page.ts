import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  createdCode = null;
  qrData = "MY QRCODE";
  constructor(

    ) {
    }
  async createQRCode() {
    this.createdCode = this.qrData;
  }

  ngOnInit() {
  }

}
