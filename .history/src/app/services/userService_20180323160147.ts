import {User} from '../models/userModel';
import { Subject, BehaviorSubject } from "rx/subject";

export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  constructor() {
  }
}