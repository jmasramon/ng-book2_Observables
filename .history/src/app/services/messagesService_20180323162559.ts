import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { Message } from '../models/messageModel';
import { Injectable } from '@angular/core';

type Update = (messages: Message[]) => Message[];

@Injectable()
export class MessagesService {
  newMessages = new Subject<Message>(); // just last message
  messages: Observable<Message[]>; // all messages
  updates = new Subject<Update>(); // update 

  constructor() {
  }
}
