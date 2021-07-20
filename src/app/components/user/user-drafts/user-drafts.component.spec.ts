import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDraftsComponent } from './user-drafts.component';

describe('UserDraftsComponent', () => {
  let component: UserDraftsComponent;
  let fixture: ComponentFixture<UserDraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
