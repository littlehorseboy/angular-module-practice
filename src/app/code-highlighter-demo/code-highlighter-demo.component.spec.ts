import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHighlighterDemoComponent } from './code-highlighter-demo.component';

describe('CodeHighlighterDemoComponent', () => {
  let component: CodeHighlighterDemoComponent;
  let fixture: ComponentFixture<CodeHighlighterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeHighlighterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHighlighterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
