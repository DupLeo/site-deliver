import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInputControleLivraisonComponent } from './card-input-controle-livraison.component';

describe('CardInputControleLivraisonComponent', () => {
  let component: CardInputControleLivraisonComponent;
  let fixture: ComponentFixture<CardInputControleLivraisonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInputControleLivraisonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInputControleLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
