import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponentComponent } from './appareil-component/appareil-component.component';
import { AppareilService } from './Services/appareil.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MonPremierComponent, AppareilComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService]
})
export class AppModule { }
