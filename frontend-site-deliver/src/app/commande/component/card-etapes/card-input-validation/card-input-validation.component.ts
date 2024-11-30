import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-input-validation',
  templateUrl: './card-input-validation.component.html',
  styleUrls: ['./card-input-validation.component.scss'],
})
export class CardInputValidationComponent  implements OnInit {


  availability: string = ''; // Gère l'état des options radio
  selectedDate: string | null = null; // Stocke la date sélectionnée

  constructor() { }

  ngOnInit() {}

}
