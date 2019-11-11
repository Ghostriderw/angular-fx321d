import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
 })
export class AppareilService {

appareilsSubject = new Subject<any[]>()

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

constructor(private httpClient: HttpClient) { }


addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
}

getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }



switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'Plein';
      this.emitAppareilSubject();
    }
}

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'Vide';
      this.emitAppareilSubject();
    }
}

switchOnOne(i: number) {
    this.appareils[i].status = 'Plein';
    this.emitAppareilSubject();
}

switchOffOne(i: number) {
    this.appareils[i].status = 'Vide';
    this.emitAppareilSubject();
}

saveAppareilsToServer() {
    this.httpClient
      .put('https://avec-alex-on-apex.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://avec-alex-on-apex.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}





}