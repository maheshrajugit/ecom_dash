import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWebsiteComponent } from './manage-website.component';

describe('ManageWebsiteComponent', () => {
  let component: ManageWebsiteComponent;
  let fixture: ComponentFixture<ManageWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageWebsiteComponent]
    });
    fixture = TestBed.createComponent(ManageWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
