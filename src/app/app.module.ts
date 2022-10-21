import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAblakComponent } from './login-ablak/login-ablak.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { TermekekComponent } from './termekek/termekek.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginAblakComponent,
    FejlecComponent,
    LablecComponent,
    MenuComponent,
    TermekekComponent,
    NyitooldalComponent,
    KapcsolatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
