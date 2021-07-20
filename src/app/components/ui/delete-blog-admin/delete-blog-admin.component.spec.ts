import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBlogAdminComponent } from './delete-blog-admin.component';

describe('DeleteBlogAdminComponent', () => {
  let component: DeleteBlogAdminComponent;
  let fixture: ComponentFixture<DeleteBlogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBlogAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
