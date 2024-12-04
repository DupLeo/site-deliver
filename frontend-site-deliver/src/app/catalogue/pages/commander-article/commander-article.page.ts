import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Commande, EtapeHistorique} from '../../../data/commandes.model';
import {CommandeService} from "../../../services/api/commande.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-commander-article',
  templateUrl: './commander-article.page.html',
  styleUrls: ['./commander-article.page.scss'],
})
export class CommanderArticlePage implements OnInit {

  @Input() idArticle : any;
  Article: any;
  etape : number = 1;
  client = {nom:"",mail:"",tel:""}
  isToastOpen = false;
  Sites: any;
  place1 : string = "";
  place2 : string = "";
  comm : string = "";
  Commande = {idArticle:1, client: {}, sitePresence:"", siteLivraison:"", commentaire:""};



  constructor(private route : ActivatedRoute,
              private router: Router,
              private commandeService: CommandeService,
              private toastController: ToastController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idArticle = params.get('id');
    });
    this.getItem();
    this.getSites();
    this.Commande.idArticle = this.idArticle;
  }

  getItem(){
    // recherche avec l'id en utilisant AXIOS vers la BDD
    this.Article =  {id: 1, nom:"Table de bureau",price:"20", desc:"petite table de bureau."};
  }

  // récupère la liste des sites dispo
  getSites(){
    this.Sites = [ "chambery", "annecy", "alberville"];
  }

  suivant(){
    this.etape = this.etape + 1;
  }
  retour(){
    this.etape = this.etape - 1;
  }
  reset(){
    this.etape = 1;
    this.idArticle = null;
    this.Article = {};
    this.router.navigate(['/'])
  }
  back() {
    this.router.navigate(['/']);
  }

  // les informations du client sont tout bon
  // TODO : Ajouter des conditions (Format des mails, telephone, etc...)
  infoClientOk(){
    // retourne un booléen si le formulaire du client est ok
    return this.client.nom && this.client.mail && this.client.tel &&
      this.client.nom !== "" && this.client.mail !== "" && this.client.tel !== "";
  }

  isInfoClientOk(){
    // vérifier si le formulaire est correct
    if(this.infoClientOk()){
      this.setOpenToast(false);
      this.Commande.client = this.client;
      this.suivant();
    } else {
      this.setOpenToast(true);
    }
  }

  isInfoLivraisonOk(){
    if(this.place1 != "" && this.place2 != "" && this.place1 != this.place2){
      this.Commande.sitePresence = this.place1;
      this.Commande.siteLivraison = this.place2;
      this.Commande.commentaire = this.comm;
      this.setOpenToast(false);
      this.suivant();
    } else {
      this.setOpenToast(true);
    }

  }

  setOpenToast(isok : boolean){
    this.isToastOpen = isok;
  }

  completeCommande(){
    let COM : Commande = {
      id: "1",
      name: this.client.nom + " - "+this.Article.nom,
      status: "disponibilite",
      site: this.place1,
      etapesHistorique: {
        disponibilite: {
          donnees: {
            availability: "non spécifié",
            selectedDate: '',
          },
        },
        configuration: {
          donnees: {
            documentation: false, // Pas de documentation par défaut
            preparationFee: {
              enabled: false,
              type: "",
              amount: this.Article.price,
              comment: this.Commande.commentaire,
            },
          },
        },
        controleLivraison: {
          donnees: {
            passage: false,
            date: '',
            configuration: false,
          },
        },
        financement: {
          donnees: {
            status: "non-défini",
            amount: 0,
            paymentMethod: "",
          },
        },
        dateLivraison: {
          donnees: {
            estimatedDate: '',
          },
        },
        virement: {
          donnees: {
            status: false,
            commentaire: '',
          },
        },
        packaging: {
          donnees: {
            readyForPackaging: false,
          },
        },
      },
    };
    this.commandeService.create(COM).subscribe({
      next: (response) => {
        console.log('Commande créée avec succès :', response);
        this.presentToast('Commande envoyée avec succès :')
      },
      error: (err) => {
        console.error('Erreur lors de la création de la commande :', err);
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }

}
