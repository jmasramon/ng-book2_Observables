import { User } from '../models/userModel';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }
}
