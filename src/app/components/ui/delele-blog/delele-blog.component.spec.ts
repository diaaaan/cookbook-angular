import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleleBlogComponent } from './delele-blog.component';

describe('DeleleBlogComponent', () => {
  let component: DeleleBlogComponent;
  let fixture: ComponentFixture<DeleleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleleBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
