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
    { label: 'Disponibilité', value: 'disponibilite' },
    { label: 'Configuration', value: 'configuration' },
    { label: 'Controle livraison', value: 'controleLivraison' },
    { label: 'Financement', value: 'financement' },
    { label: 'Virement', value: 'virement' },
    { label: 'Date livraison', value: 'dateLivraison' },
    { label: 'Packaging', value: 'packaging' },

  ];

  filterCommande(status: string) {
    this.selectedFilter = this.selectedFilter === status ? '' : status;
    this.filterChanged.emit(this.selectedFilter);
  }
}

