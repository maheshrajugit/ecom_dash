import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDailogComponent } from './overlay-dailog.component';

describe('OverlayDailogComponent', () => {
  let component: OverlayDailogComponent;
  let fixture: ComponentFixture<OverlayDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayDailogComponent]
    });
    fixture = TestBed.createComponent(OverlayDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
