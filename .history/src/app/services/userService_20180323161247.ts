import { User } from '../models/userModel';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, bind } from '@angular/core';

@Injectable()
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }
}

export const userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService) ];
