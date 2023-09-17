import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayEditProductsComponent } from './overlay-edit-products.component';

describe('OverlayEditProductsComponent', () => {
  let component: OverlayEditProductsComponent;
  let fixture: ComponentFixture<OverlayEditProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayEditProductsComponent]
    });
    fixture = TestBed.createComponent(OverlayEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
