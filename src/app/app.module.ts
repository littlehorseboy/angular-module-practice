import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { InputGroupDemoComponent } from './input-group-demo/input-group-demo.component';
import { CodeHighlighterDemoComponent } from './code-highlighter-demo/code-highlighter-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupDemoComponent,
    CodeHighlighterDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    CheckboxModule,
    RadioButtonModule,
    CodeHighlighterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
