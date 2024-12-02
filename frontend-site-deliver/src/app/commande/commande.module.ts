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
import {
  CardInputControleLivraisonComponent
} from "./component/card-etapes/card-input-controle-livraison/card-input-controle-livraison.component";
import {CardInputFinancementComponent} from "./component/card-etapes/card-input-financement/card-input-financement.component";
import {CardInputVirementComponent} from "./component/card-etapes/card-input-virement/card-input-virement.component";
import {
  CardInputDateLivraisonComponent
} from "./component/card-etapes/card-input-date-livraison/card-input-date-livraison.component";
import {
  CardInputPackagingPretComponent
} from "./component/card-etapes/card-input-packaging-pret/card-input-packaging-pret.component";
import {SwipperCardEtapeComponent} from "./component/swipper-card-etape/swipper-card-etape.component";
import {
  CardInputConfigurationComponent
} from "./component/card-etapes/card-input-configuration/card-input-configuration.component";
import {
  CardInputDisponibiliteComponent
} from "./component/card-etapes/card-input-disponibilite/card-input-disponibilite.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    SharedModule
  ],
  declarations: [CommandePage, RowCommandeComponent, RowChipsFilterComponent, ModalGererCommandeComponent, CardCommandeComponent, CardInputControleLivraisonComponent, CardInputFinancementComponent, CardInputVirementComponent, CardInputDateLivraisonComponent, CardInputPackagingPretComponent, SwipperCardEtapeComponent, CardInputConfigurationComponent, CardInputDisponibiliteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommandePageModule {}
