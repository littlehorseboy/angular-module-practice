import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuDemoComponent } from './tab-menu-demo.component';

describe('TabMenuDemoComponent', () => {
  let component: TabMenuDemoComponent;
  let fixture: ComponentFixture<TabMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
