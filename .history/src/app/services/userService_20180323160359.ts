import {User} from '../models/userModel';
import { Subject } from 'rxjs/Subject';

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}