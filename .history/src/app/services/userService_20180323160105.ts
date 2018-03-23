import {User} from '../models/userModel';
import {  } from "module";

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}