import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleComponentComponent } from './components/style-component/style-component.component';
import { StyleColorComponent } from './components/style-color/style-color.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponentComponent,
    StyleColorComponent,
    NgclassComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
