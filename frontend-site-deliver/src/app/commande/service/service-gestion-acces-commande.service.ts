import { Injectable } from '@angular/core';
import { UserService} from "../../services/api/user.service";
import {CommandeService} from "../../services/api/commande.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionAccesCommandeService {

  private accesRole = {
    vendeur: ["controleLivraison", "financement", "dateLivraison"],
    rco: ["disponibilite", "configuration" ],
    secreteriat: [""],
    expertProduit: [""],
    accessoiriste: ["packaging"],
    financialManager: [""],
    comptabilite: ["virement"]
  }

  constructor(private userService: UserService, private commandeService: CommandeService) { }

  autorisationAccesRoleEtape(etape: string): boolean {
    const userInfo = this.userService.getUserInfo();

    if (userInfo && this.accesRole[userInfo.poste]) {
      return this.accesRole[userInfo.poste].includes(etape);
    }

    return false;
  }

  updateStepData(idCommande:string, stepName:string, newData:any) {
  console.log("stepName ", stepName)
    this.commandeService.updateStep(idCommande, stepName, newData).subscribe({
      next: (response) => {
        console.log("Réponse du serveur:", response);
      },
      error: (error) => {
        console.error("Erreur côté serveur:", error);
      },
    });
  }
}
