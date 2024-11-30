import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwipperCardEtapeComponent } from './swipper-card-etape.component';

describe('SwipperCardEtapeComponent', () => {
  let component: SwipperCardEtapeComponent;
  let fixture: ComponentFixture<SwipperCardEtapeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperCardEtapeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwipperCardEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
