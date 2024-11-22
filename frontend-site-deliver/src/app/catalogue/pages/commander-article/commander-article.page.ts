import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-commander-article',
  templateUrl: './commander-article.page.html',
  styleUrls: ['./commander-article.page.scss'],
})
export class CommanderArticlePage implements OnInit {

  @Input() idArticle : any;
  Article: any;
  etape : number = 1;
  isEnable = true;
  client = {nom:null,mail:null,tel:null}
  isToastOpen = false;



  constructor(private route : ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idArticle = params.get('id');
    });
    this.getItem();
    console.log(this.idArticle);
  }

  getItem(){
    // recherche avec l'id en utilisant AXIOS vers la BDD
    this.Article =  {id: 1, nom:"Table de bureau",price:"20", desc:"petite table de bureau."};
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

  // les infos du client n'ont pas été entré
  weshYaRien(){
    return (this.client.tel == null && this.client.nom == null && this.client.mail == null);
  }

  mailClientValide(){
    if(this.client.mail ){}
  }

  // les informations du client sont tout bon
  // TODO : Ajouter des conditions (Format des mails, telemphone, etc...)
  infoClientOk(){
    // retourne un booléen si le formulaire du client est ok
    return ((this.client.nom == null || this.client.nom == "") ||
    (this.client.mail == null || this.client.mail == "") ||
    (this.client.tel == null || this.client.tel == "")) ||
      this.weshYaRien();


  }

  // si tout les formulaires sont ok
  isEverythingOk(){
    // vérifier si le formulaire est correct
    if(this.infoClientOk()){
      console.log(this.client)
      this.setOpenToast(true);
      this.isEnable = true;
    } else {
      this.setOpenToast(false);
    }
  }

  setOpenToast(isok : boolean){
    this.isToastOpen = isok;
  }

}
