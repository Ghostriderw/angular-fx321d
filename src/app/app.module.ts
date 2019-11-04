import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil-component/appareil-component.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {Routes,RouterModule} from "@angular/router";
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard],component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, MonPremierComponent, AppareilComponent, AppareilViewComponent, AuthComponent, SingleAppareilComponent, FourOhFourComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService, AuthService, AuthGuardService]
})
export class AppModule { }
