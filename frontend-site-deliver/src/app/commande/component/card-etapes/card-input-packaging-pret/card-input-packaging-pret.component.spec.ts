import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInputPackagingPretComponent } from './card-input-packaging-pret.component';

describe('CardInputPackagingPretComponent', () => {
  let component: CardInputPackagingPretComponent;
  let fixture: ComponentFixture<CardInputPackagingPretComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInputPackagingPretComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInputPackagingPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
