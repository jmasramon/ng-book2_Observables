import { v4 as uuid } from 'uuid';

export class User {
  public id: number;

  constructor(
    public name: string,
    public avatarSrc: string) {
      this.id = uuid();
    }
}
