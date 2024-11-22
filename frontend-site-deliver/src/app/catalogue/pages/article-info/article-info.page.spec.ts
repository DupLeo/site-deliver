import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleInfoPage } from './article-info.page';

describe('ArticleInfoPage', () => {
  let component: ArticleInfoPage;
  let fixture: ComponentFixture<ArticleInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
