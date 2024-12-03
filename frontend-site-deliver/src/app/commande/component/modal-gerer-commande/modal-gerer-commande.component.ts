import {Component, Input, OnInit} from '@angular/core';
import { register} from "swiper/element/bundle";
import { ServiceGestionAccesCommandeService} from "../../service/service-gestion-acces-commande.service";
import { Commande } from '../../../data/commandes.model'
import {ModalController} from "@ionic/angular";

register()
@Component({
  selector: 'app-modal-gerer-commande',
  templateUrl: './modal-gerer-commande.component.html',
  styleUrls: ['./modal-gerer-commande.component.scss'],
})
export class ModalGererCommandeComponent  implements OnInit {

  @Input() commande!: Commande

  actionPossibleRole = false
  selectedSegment: string = 'first';
  @Input() fermer: boolean = false;

  constructor(private serviceAcces:ServiceGestionAccesCommandeService, private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.actionPossibleRole = this.serviceAcces.autorisationAccesRoleEtape(this.commande.status)
    this.choiceSegment()
  }

  choiceSegment(){
    if(this.actionPossibleRole){
      this.selectedSegment = 'first'
    }else {
      this.selectedSegment = 'third'
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
