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
