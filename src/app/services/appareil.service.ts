import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
 })
export class AppareilService {

appareils = [
    {
      id:1,
      name: 'P2020',
      status: 'Vide'
    },
    {
      id:2,
      name: 'R-301',
      status: 'Plein'
    },
    {
      id:3,
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

getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}



}