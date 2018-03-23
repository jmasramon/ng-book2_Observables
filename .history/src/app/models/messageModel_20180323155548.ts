import { v4 as uuid } from 'uuid';

class Message {
  private id: number;
  public sentAt: Date;
  public isRead: boolean;
  text: string;
  author: number;
  thread: number;

  constructor(
  ) {
    this.id = uuid();
  }
}
