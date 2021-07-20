import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipieComponent } from './admin-recipie.component';

describe('AdminRecipieComponent', () => {
  let component: AdminRecipieComponent;
  let fixture: ComponentFixture<AdminRecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
