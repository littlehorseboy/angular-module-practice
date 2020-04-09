import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { InputGroupDemoComponent } from './input-group-demo/input-group-demo.component';
import { CodeHighlighterDemoComponent } from './code-highlighter-demo/code-highlighter-demo.component';
import { TabMenuDemoComponent } from './tab-menu-demo/tab-menu-demo.component';
import { StepsDemoComponent } from './steps-demo/steps-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupDemoComponent,
    CodeHighlighterDemoComponent,
    TabMenuDemoComponent,
    StepsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    CheckboxModule,
    RadioButtonModule,
    CodeHighlighterModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
