import {Component, Input, OnInit} from '@angular/core';
import { register} from "swiper/element/bundle";

register()
@Component({
  selector: 'app-modal-gerer-commande',
  templateUrl: './modal-gerer-commande.component.html',
  styleUrls: ['./modal-gerer-commande.component.scss'],
})
export class ModalGererCommandeComponent  implements OnInit {

  constructor() { }
  selectedSegment: string = 'first';
  @Input() commande!: { name: string, status: string };

  ngOnInit() {}

}
