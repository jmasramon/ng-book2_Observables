import { v4 as uuid } from 'uuid';

export class User {
  private id: number;

  constructor(
    public name: string,
    public avatarSrc: string) {
      this.id = uuid();
    }
}
