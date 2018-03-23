import { v4 as uuid } from 'uuid';

class Thread {
  private id: number;
  lastMessage: number;
  constructor(
    public name?: string,
    public avatarSrc?: string
  ) {
    this.id = uuid();
    this.name
  }
}
