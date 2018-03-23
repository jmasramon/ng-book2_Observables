import { Subject } from 'rxjs/Subject';
import { Message } from '../models/messageModel';

interface Updates extends Function {
  Message[] => Message[]
}

export class MessagesService {
  newMessages = new Subject<Message>();
  messages = new Subject<Message>();
  updates = new Subject<Updates>();
  constructor() {

  }
}