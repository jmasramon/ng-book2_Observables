import { Subject } from 'rxjs/Subject';
import { Message } from '../models/messageModel';

export class MessagesService {
  newMessages = new Subject<Message>(null)
  constructor() {

  }
}