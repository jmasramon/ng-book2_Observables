import { v4 as uuid } from 'uuid';

class Message {
  private id: number;

  constructor(
    public sentAt: Date,
    public isRead: boolean,
    text: string,
    author: number,
    thread: number
  ) {}
}
