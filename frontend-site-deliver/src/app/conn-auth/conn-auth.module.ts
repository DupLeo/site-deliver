import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';

import { ConnAuthPageRoutingModule } from './conn-auth-routing.module';

import { ConnAuthPage } from './conn-auth.page';
import {RegisterComponent} from "./component/register/register.component";
import {CataloguePageModule} from "../catalogue/catalogue.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnAuthPageRoutingModule,
    FormsModule,
    CataloguePageModule,
    HttpClientModule
  ],
  declarations: [ConnAuthPage, RegisterComponent],
})
export class ConnAuthPageModule {}
