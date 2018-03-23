import { v4 as uuid } from 'uuid';

class Message {
  private id: number;

  constructor(
  ) {
    this.id = uuid();
  }
}
