import { v4 as uuid } from 'uuid';

export class Thread {
  public id: number;
  public lastMessage: number;

  constructor(
    public name?: string,
    public avatarSrc?: string
  ) {
    this.id = uuid();
    this.name = name || '';
    this.avatarSrc = avatarSrc || '';
  }
}
