import { Component, OnInit } from '@angular/core';
import

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor(messageService: MessagesService) { }

  ngOnInit() {
  }

  newMessage(form: {newMessage: string}): void {
    console.log('new message:', form.newMessage);
  }
}
