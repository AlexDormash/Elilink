import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { CardsComponentComponent } from './components/cards-component/cards-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    CardsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
