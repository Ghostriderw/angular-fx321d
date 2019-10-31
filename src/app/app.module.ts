import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MonPremierComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
