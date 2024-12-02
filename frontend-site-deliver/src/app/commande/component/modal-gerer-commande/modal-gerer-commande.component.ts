import {Component, Input, OnInit} from '@angular/core';
import { register} from "swiper/element/bundle";
import { ServiceGestionAccesCommandeService} from "../../service/service-gestion-acces-commande.service";

register()
@Component({
  selector: 'app-modal-gerer-commande',
  templateUrl: './modal-gerer-commande.component.html',
  styleUrls: ['./modal-gerer-commande.component.scss'],
})
export class ModalGererCommandeComponent  implements OnInit {

  @Input() commande!: { name: string; status: string; etapesHistorique: { [key: string]: { donnees: any } } }

  actionPossibleRole = false
  selectedSegment: string = 'first';

  constructor(private serviceAcces:ServiceGestionAccesCommandeService) { }

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
}
