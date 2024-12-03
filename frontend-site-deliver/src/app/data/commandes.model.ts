export interface Disponibilite {
  availability: string; // Disponible immédiatement, ultérieurement, etc.
  selectedDate?: string; // Date optionnelle
}

export interface Configuration {
  documentation: boolean;
  preparationFee: {
    enabled: boolean;
    type: string; // Par exemple, 'emballe', 'vrac', etc.
    amount: number;
    comment?: string;
  };
}

export interface ControleLivraison {
  passage: boolean; // Si le contrôle est activé
  date?: string; // Date du contrôle
  configuration: boolean; // Si la configuration a été validée
}

export interface Financement {
  status: string; // Statut du financement
  amount?: number; // Montant optionnel
  paymentMethod?: string; // Méthode de paiement
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
  name: string;
  status: string;
  site: string;
  etapesHistorique: EtapeHistorique;
}
