export class UserService {
  currentUser: Subject<User> = new Behavior
  constructor() {
  }
}