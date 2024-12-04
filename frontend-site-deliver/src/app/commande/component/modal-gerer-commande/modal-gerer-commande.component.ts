import {Component, Input, OnInit} from '@angular/core';
import { register} from "swiper/element/bundle";
import { ServiceGestionAccesCommandeService} from "../../service/service-gestion-acces-commande.service";
import { Commande } from '../../../data/commandes.model'
import {ModalController, ToastController} from "@ionic/angular";

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

  constructor(private serviceAcces:ServiceGestionAccesCommandeService,
              private modalController: ModalController,
              private toastController: ToastController
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
    this.presentToast('Étape complétée avec succès !');
    this.modalController.dismiss();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }

}
