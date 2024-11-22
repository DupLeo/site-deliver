import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommanderArticlePage } from './commander-article.page';

describe('CommanderArticlePage', () => {
  let component: CommanderArticlePage;
  let fixture: ComponentFixture<CommanderArticlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
