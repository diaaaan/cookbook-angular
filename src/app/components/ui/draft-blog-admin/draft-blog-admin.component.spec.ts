import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftBlogAdminComponent } from './draft-blog-admin.component';

describe('DraftBlogAdminComponent', () => {
  let component: DraftBlogAdminComponent;
  let fixture: ComponentFixture<DraftBlogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftBlogAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
