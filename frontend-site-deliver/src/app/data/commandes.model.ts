export interface Disponibilite {
  availability: string;
  selectedDate?: string;
}

export interface Configuration {
  documentation: boolean;
  preparationFee: {
    enabled: boolean;
    type: string;
    amount: number;
    comment?: string;
  };
}

export interface ControleLivraison {
  passage: boolean;
  date?: string;
  configuration: boolean;
}

export interface Financement {
  status: string;
  amount?: number;
  paymentMethod?: string;
}

export interface DateLivraison {
  estimatedDate?: string;
}

export interface Virement {
  status: boolean;
  commentaire?: string;
}

export interface Packaging {
  readyForPackaging: boolean | string;
}

export interface EtapeHistorique {
  disponibilite: { donnees: Disponibilite };
  configuration: { donnees: Configuration };
  controleLivraison: { donnees: ControleLivraison };
  financement: { donnees: Financement };
  dateLivraison: { donnees: DateLivraison };
  virement: { donnees: Virement };
  packaging: { donnees: Packaging };
}

export interface Commande {
  id: string;
  name: string;
  status: string;
  site: string;
  etapesHistorique: EtapeHistorique;
}
