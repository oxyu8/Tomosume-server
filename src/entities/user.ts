export class User {
  public uid: string;
  public userName: string;
  public userEmail: string;

  constructor(uid: string, userName: string, userEmail: string) {
    this.uid = uid;
    this.userName = userName;
    this.userEmail = userEmail;
  }
}

// TODO:validation method
