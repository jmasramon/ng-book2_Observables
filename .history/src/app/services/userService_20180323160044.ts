import User from ''

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}