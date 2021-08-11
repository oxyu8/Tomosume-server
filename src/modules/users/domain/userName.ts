export class UserName {
  private constructor(private userName: string) {}

  get value(): string {
    return this.userName;
  }

  public static create(userName: string): UserName {
    // TODO: validation
    return new UserName(userName);
  }
}
