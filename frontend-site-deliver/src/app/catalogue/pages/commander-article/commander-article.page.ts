import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommandePage} from "../../../commande/commande.page";

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



  constructor(private route : ActivatedRoute, private router: Router) {}

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
    this.Sites = [ "Chambéry", "Annecy", "Bourg-en-Bresse", "Toulouse","Lyon"];
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
  }

  // les informations du client sont tout bon
  // TODO : Ajouter des conditions (Format des mails, telemphone, etc...)
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

}
