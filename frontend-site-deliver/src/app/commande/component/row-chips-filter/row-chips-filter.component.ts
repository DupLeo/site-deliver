import { Component, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-row-chips-filter',
  templateUrl: './row-chips-filter.component.html',
  styleUrls: ['./row-chips-filter.component.scss'],
})
export class RowChipsFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  selectedFilter: string = '';

  chips = [
    { label: 'À valider', value: 'valider' },
    { label: 'À préparer', value: 'preparer' },
    { label: 'À charger', value: 'envoyer' },
    { label: 'À réceptionner', value: 'receptionner' },
  ];

  filterCommande(status: string) {
    this.selectedFilter = this.selectedFilter === status ? '' : status;
    this.filterChanged.emit(this.selectedFilter);
  }
}


