import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Avec Alex On APEX';
  isAuth = false;

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
  
  

 
  
  constructor() {
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
