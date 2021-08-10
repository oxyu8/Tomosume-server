export class UserName {
  constructor(private userName: string) {}
  equals(other: UserName): boolean {
    if (this.userName === other.userName) {
      return true;
    }
    return false;
  }

  toString(): string {
    return this.userName;
  }
}
