export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>()
  constructor() {
  }
}