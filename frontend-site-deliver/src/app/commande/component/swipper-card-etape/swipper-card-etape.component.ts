import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swipper-card-etape',
  templateUrl: './swipper-card-etape.component.html',
  styleUrls: ['./swipper-card-etape.component.scss'],
})
export class SwipperCardEtapeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() commande!: { name: string, status: string };


}
