import { Subject } from 'rxjs/Subject';
import { Message } from '../models/messageModel';
import { Inject, Injectable } from '@angular/core';

type Update = (messages: Message[]) => Message[];

@Injectable()
export class MessagesService {
  newMessages = new Subject<Message>();
  messages = new Subject<Message>();
  updates = new Subject<Update>();
  constructor() {
  }
}
