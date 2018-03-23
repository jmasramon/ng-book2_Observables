import { v4 as uuid } from 'uuid';

class Message {
  private id: number;
  public sentAt: Date;
  public isRead: boolean;
  public text: string;
  public author: number;
  public thread: number;

  constructor(configObj?: any) {
    this.id = uuid();
    this.isRead = 
  }
}
