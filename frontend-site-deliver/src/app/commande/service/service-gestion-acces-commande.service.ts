import { Injectable } from '@angular/core';
import { UserService} from "../../services/api/user.service";

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

  constructor(private userService: UserService) { }

  autorisationAccesRoleEtape(etape: string): boolean {
    const userInfo = this.userService.getUserInfo();

    if (userInfo && this.accesRole[userInfo.poste]) {
      return this.accesRole[userInfo.poste].includes(etape);
    }

    return false;
  }


}
