import { HeaderModule } from './../../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    AlertPageRoutingModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
