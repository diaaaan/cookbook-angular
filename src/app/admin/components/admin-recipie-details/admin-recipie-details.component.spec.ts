import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipieDetailsComponent } from './admin-recipie-details.component';

describe('AdminRecipieDetailsComponent', () => {
  let component: AdminRecipieDetailsComponent;
  let fixture: ComponentFixture<AdminRecipieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecipieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
