export class User {
  private constructor(
    public userId: string,
    public userName: string,
    public userEmail: string
  ) {}

  public static create(userId: string, userName: string, userEmail: string) {
    // if (userId === null || userId === undefined) {
    //   return "error";
    // }
    // if (userName === null || userName === undefined) {
    //   return "error";
    // }
    // if (userEmail === null || userEmail === undefined) {
    //   return "error";
    // }
    const user = new User(userId, userName, userEmail);
    return user;
  }
}
