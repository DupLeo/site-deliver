import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';

import { ConnAuthPageRoutingModule } from './conn-auth-routing.module';

import { ConnAuthPage } from './conn-auth.page';
import {RegisterComponent} from "./component/register/register.component";
import {Tab1PageModule} from "../tab1/tab1.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnAuthPageRoutingModule,
    FormsModule,
    Tab1PageModule,
    HttpClientModule
  ],
  declarations: [ConnAuthPage, RegisterComponent],
})
export class ConnAuthPageModule {}
