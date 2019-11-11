import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {
   private users: User[] = [
    new User('Alexandre', 'MONIN', 'avecalexonapex@gmail.com', 'Peacekeeper', ['coder', 'boire du café'])
];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}