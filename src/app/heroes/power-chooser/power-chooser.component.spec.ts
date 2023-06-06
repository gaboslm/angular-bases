import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerChooserComponent } from './power-chooser.component';

describe('PowerChooserComponent', () => {
  let component: PowerChooserComponent;
  let fixture: ComponentFixture<PowerChooserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerChooserComponent]
    });
    fixture = TestBed.createComponent(PowerChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
