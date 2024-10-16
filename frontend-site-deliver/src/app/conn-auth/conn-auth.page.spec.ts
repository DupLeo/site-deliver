import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnAuthPage } from './conn-auth.page';

describe('ConnAuthPage', () => {
  let component: ConnAuthPage;
  let fixture: ComponentFixture<ConnAuthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
