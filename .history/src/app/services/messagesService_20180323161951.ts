import { Subject } from 'rxjs/Subject';
import { Message } from '../models/messageModel';

interface IUpdate extends Function {
  (messages: Message[]): Message[];
}

export class MessagesService {
  newMessages = new Subject<Message>();
  messages = new Subject<Message>();
  updates = new Subject<IUpdate>();
  constructor() {

  }
}