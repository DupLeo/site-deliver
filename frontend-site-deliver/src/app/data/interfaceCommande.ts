 interface EtapesHistorique {
  [key: string]: {
    donnees: any;
  };
}

export interface Commande {
  name: string;
  status: string;
  etapesHistorique: EtapesHistorique;
}
