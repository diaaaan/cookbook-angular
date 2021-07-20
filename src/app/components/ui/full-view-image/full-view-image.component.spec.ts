import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullViewImageComponent } from './full-view-image.component';

describe('FullViewImageComponent', () => {
  let component: FullViewImageComponent;
  let fixture: ComponentFixture<FullViewImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullViewImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
