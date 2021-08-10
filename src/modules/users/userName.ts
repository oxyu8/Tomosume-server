export class UserName {
  constructor(private userName: string) {}
  equals(other: UserName): boolean {
    if (this === other) {
      return true;
    }
    return false;
  }
}
