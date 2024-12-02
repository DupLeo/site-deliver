import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInputDisponibiliteComponent } from './card-input-disponibilite.component';

describe('CardInputDisponibiliteComponent', () => {
  let component: CardInputDisponibiliteComponent;
  let fixture: ComponentFixture<CardInputDisponibiliteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInputDisponibiliteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInputDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
