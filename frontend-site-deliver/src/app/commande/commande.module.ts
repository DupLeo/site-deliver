import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';

import { CommandePage } from './commande.page';
import {RowCommandeComponent} from "./component/row-commande/row-commande.component";
import {RowChipsFilterComponent} from "./component/row-chips-filter/row-chips-filter.component";
import {ModalGererCommandeComponent} from "./component/modal-gerer-commande/modal-gerer-commande.component";
import {CardCommandeComponent} from "./component/card-commande/card-commande.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    SharedModule
  ],
  declarations: [CommandePage, RowCommandeComponent, RowChipsFilterComponent, ModalGererCommandeComponent, CardCommandeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommandePageModule {}
