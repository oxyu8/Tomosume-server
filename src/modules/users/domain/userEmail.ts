export class UserEmail {
  private constructor(private email: string) {}

  get value(): string {
    return this.email;
  }

  private static isValidEmail(email: string) {
    const pattern = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    return pattern.test(email);
  }

  public static create(email: string) {
    if (!this.isValidEmail(email)) {
      return "Not Valid";
    }
    return new UserEmail(email);
  }
}
