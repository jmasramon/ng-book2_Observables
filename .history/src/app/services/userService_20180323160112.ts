import {User} from '../models/userModel';
import {  } from "rx";

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}