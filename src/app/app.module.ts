import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { InputGroupDemoComponent } from './input-group-demo/input-group-demo.component';
import { CodeHighlighterDemoComponent } from './code-highlighter-demo/code-highlighter-demo.component';
import { TabMenuDemoComponent } from './tab-menu-demo/tab-menu-demo.component';
import { StepsDemoComponent } from './steps-demo/steps-demo.component';
import { SlideMenuDemoComponent } from './slide-menu-demo/slide-menu-demo.component';
import { PanelMenuDemoComponent } from './panel-menu-demo/panel-menu-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupDemoComponent,
    CodeHighlighterDemoComponent,
    TabMenuDemoComponent,
    StepsDemoComponent,
    SlideMenuDemoComponent,
    PanelMenuDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ArticleModule,
    CheckboxModule,
    RadioButtonModule,
    CodeHighlighterModule,
    TabMenuModule,
    StepsModule,
    SlideMenuModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
