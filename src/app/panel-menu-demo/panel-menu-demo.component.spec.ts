import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMenuDemoComponent } from './panel-menu-demo.component';

describe('PanelMenuDemoComponent', () => {
  let component: PanelMenuDemoComponent;
  let fixture: ComponentFixture<PanelMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
