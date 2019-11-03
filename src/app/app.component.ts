import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Avec Alex On APEX';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'P2020',
      status: 'Vide'
    },
    {
      name: 'R-301',
      status: 'Plein'
    },
    {
      name: 'Mastiff',
      status: 'Plein'
    }
  ];
  
  

 
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
  onAllumer() {
    console.log('On allume tout !');
}
}
