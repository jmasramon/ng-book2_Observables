import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Subject } from 'rxjs/Subject';
export class MessagesService {
  newMessages = new Subject<Message>
  constructor() {

  }
}