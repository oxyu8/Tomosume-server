export class BaseSerializer {
  // TODO: 型
  public error(error: any) {
    try {
      const err = JSON.parse(error.message);
      return {
        code: err.code,
        errorName: error.name,
        message: err.message,
        responsedAt: "time",
      };
    } catch {
      return {
        code: "catch",
        errorName: error.name,
        message: "err obj parse error",
        responsedAt: "time",
      };
    }
  }
}
