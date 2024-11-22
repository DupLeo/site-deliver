import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  // paramètre à recevoir
  @Input() article: any;

  constructor(private router: Router) { }

  ngOnInit() {}

}
