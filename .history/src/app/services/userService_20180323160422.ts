import { User } from '../models/userModel';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}