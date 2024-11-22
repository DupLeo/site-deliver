import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';

import { CommandePage } from './commande.page';
import {HeaderSearchComponent} from "../componentGlobal/header-search/header-search.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule
  ],
  declarations: [CommandePage, HeaderSearchComponent]
})
export class CommandePageModule {}
