import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
 })
export class AppareilService {

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
  
switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'Plein';
    }
}

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'Vide';
    }
}

switchOnOne(i: number) {
    this.appareils[i].status = 'Plein';
}

switchOffOne(i: number) {
    this.appareils[i].status = 'Vide';
}



}