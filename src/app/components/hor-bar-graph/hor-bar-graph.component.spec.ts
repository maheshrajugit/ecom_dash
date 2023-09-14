import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorBarGraphComponent } from './hor-bar-graph.component';

describe('HorBarGraphComponent', () => {
  let component: HorBarGraphComponent;
  let fixture: ComponentFixture<HorBarGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorBarGraphComponent]
    });
    fixture = TestBed.createComponent(HorBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
