import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil-component/appareil-component.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MonPremierComponent, AppareilComponent, AppareilViewComponent, AuthComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService]
})
export class AppModule { }
