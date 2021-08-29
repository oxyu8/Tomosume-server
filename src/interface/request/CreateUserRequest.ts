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
    console.log("p", params);
    this.valid(params);
    this._userName = params.userName;
    this._userEmail = params.userEmail;
  }

  private valid(params: Params): void {
    /**
     *@の前は英数字または，「.!#$%&'*+/=?^_`{|}~-」の記号．
     *@の後は英数字または「-」．
     *「.」で終わることはできない．
     */
    const checkEmail = (email: string) => {
      const emailPattern = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      return emailPattern.test(email);
    };
    if (params.userName.length === 0) {
      throw new Error(
        JSON.stringify({
          code: "error",
          message: "ユーザ名は必須です",
        })
      );
    }
    if (!checkEmail(params.userEmail)) {
      throw new Error(
        JSON.stringify({
          code: "error",
          message: "メールの形式が正しくありません",
        })
      );
    }
  }
}
