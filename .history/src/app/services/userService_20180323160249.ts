import {User} from '../models/userModel';
import { Subject, BehaviorSubject } from 'rxjs'rxjs;

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}