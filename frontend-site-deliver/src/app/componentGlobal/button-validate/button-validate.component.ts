import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-validate',
  templateUrl: './button-validate.component.html',
  styleUrls: ['./button-validate.component.scss'],
})
export class ButtonValidateComponent  implements OnInit {

  constructor() { }

  @Input() content: string = 'Valider'; // par défaut

  ngOnInit() {}

}
