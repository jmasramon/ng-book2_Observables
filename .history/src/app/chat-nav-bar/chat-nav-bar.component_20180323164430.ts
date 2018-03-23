import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  public numMessages = 1;
  constructor() { }

  ngOnInit() {
  }

}
