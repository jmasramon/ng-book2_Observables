import { Subject } from 'rxjs/Subject';
import { Message } from '../models/messageModel';
import { Inject } from '@angular/core';

type Update = (messages: Message[]) => Message[];

@Inject
export class MessagesService {
  newMessages = new Subject<Message>();
  messages = new Subject<Message>();
  updates = new Subject<Update>();
  constructor() {
  }
}
