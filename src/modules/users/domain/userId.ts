export class UserId {
  private constructor(private userId: string) {}

  get value(): string {
    return this.userId;
  }

  public static create(id: string) {
    return new UserId(id);
  }
}
