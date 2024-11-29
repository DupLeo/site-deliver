import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderSearchComponent} from "./header-search/header-search.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [HeaderSearchComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeaderSearchComponent],
})
export class SharedModule { }
