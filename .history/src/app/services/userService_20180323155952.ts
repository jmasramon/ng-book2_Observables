export class UserService {
  currentUser: Subject<User> = new Behaviour
  constructor() {
  }
}