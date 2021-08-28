interface Params {
  userName: string;
  userEmail: string;
}

export class CreateUserRequest {
  private _userName: string;
  private _userEmail: string;

  public get userName(): string {
    return this._userName;
  }

  public get userEmail(): string {
    return this._userEmail;
  }

  public constructor(params: Params) {
    // this.valid(params);
    this._userName = params.userName;
    this._userEmail = params.userEmail;
  }

  // TODO: valid関数を実装
  private valid(params: Params): void {
    if (params.userName.length < 4) {
      throw new Error(
        JSON.stringify({
          code: "error",
          message: "4文字以上の名前",
        })
      );
    }
    if (params.userEmail.length < 12) {
      throw new Error(
        JSON.stringify({
          code: "error",
          message: "12文字以上の名前",
        })
      );
    }
  }
}
