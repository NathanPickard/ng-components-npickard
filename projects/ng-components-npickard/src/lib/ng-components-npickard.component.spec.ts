import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentsNpickardComponent } from './ng-components-npickard.component';

describe('NgComponentsNpickardComponent', () => {
  let component: NgComponentsNpickardComponent;
  let fixture: ComponentFixture<NgComponentsNpickardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentsNpickardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentsNpickardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
