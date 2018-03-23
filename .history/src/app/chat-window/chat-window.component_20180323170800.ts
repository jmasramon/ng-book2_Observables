import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newMessage(form: {sendNewMessage: string}): void {
    console.log('new message:', message);
  }
}
