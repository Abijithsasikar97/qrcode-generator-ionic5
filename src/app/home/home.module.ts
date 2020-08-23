import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HomePage } from './home.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    NgxQRCodeModule,
  ],
  declarations: [HomePage],
  providers: [
    SocialSharing
  ]
})
export class HomePageModule {}
