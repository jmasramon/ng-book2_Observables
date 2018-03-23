import { v4 as uuid } from 'uuid';
class Thread {
  private id: number;

  constructor(
    public name: string,
    public avatarSrc: string,
    lastMessage: number
  ) {
    this.id = uuid();
  }
}
