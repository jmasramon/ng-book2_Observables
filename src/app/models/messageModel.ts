import { v4 as uuid } from 'uuid';

export class Message {
  private id: number;
  public sentAt: Date;
  public isRead: boolean;
  public text: string;
  public author: number;
  public thread: number;

  constructor(configObj?: any) {
    this.id = uuid();
    this.sentAt = configObj && configObj.sentAt || new Date();
    this.isRead = configObj && configObj.isRead || false;
    this.text = configObj && configObj.text || '';
    this.author = configObj && configObj.author || null;
    this.thread = configObj && configObj.thread || null;
  }
}
