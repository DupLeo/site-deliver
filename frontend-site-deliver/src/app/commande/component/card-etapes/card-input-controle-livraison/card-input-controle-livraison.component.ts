import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-input-controle-livraison',
  templateUrl: './card-input-controle-livraison.component.html',
  styleUrls: ['./card-input-controle-livraison.component.scss'],
})
export class CardInputControleLivraisonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  showInputsDate = false;
  selectedDate: string | null = null; // Stocke la date sélectionnée




}
