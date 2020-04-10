import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenuDemoComponent } from './slide-menu-demo.component';

describe('SlideMenuDemoComponent', () => {
  let component: SlideMenuDemoComponent;
  let fixture: ComponentFixture<SlideMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
