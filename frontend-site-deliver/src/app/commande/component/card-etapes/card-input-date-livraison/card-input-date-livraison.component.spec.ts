import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInputDateLivraisonComponent } from './card-input-date-livraison.component';

describe('CardInputDateLivraisonComponent', () => {
  let component: CardInputDateLivraisonComponent;
  let fixture: ComponentFixture<CardInputDateLivraisonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInputDateLivraisonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInputDateLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
