import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-disponibilite',
  templateUrl: './card-input-disponibilite.component.html',
  styleUrls: ['./card-input-disponibilite.component.scss'],
})
export class CardInputDisponibiliteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() commande!: { availability: string,  selectedDate: string }



}
