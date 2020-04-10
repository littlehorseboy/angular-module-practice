import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsDemoComponent } from './steps-demo.component';

describe('StepsDemoComponent', () => {
  let component: StepsDemoComponent;
  let fixture: ComponentFixture<StepsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
