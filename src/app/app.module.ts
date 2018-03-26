import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {FormComponentComponent} from './components/form-component/form-component.component';
import {CardsComponentComponent} from './components/cards-component/cards-component.component';
import {ShareData} from './components/shareData.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    CardsComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MomentModule,
    BrowserAnimationsModule
  ],
  providers: [ShareData],
  bootstrap: [AppComponent]
})
export class AppModule {
}
