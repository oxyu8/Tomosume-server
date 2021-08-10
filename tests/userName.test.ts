import { UserName } from "../src/modules/users/domain/userName";

describe("UserName", () => {
  it("return userName", () => {
    const userName = new UserName("test");
    expect(userName.toString()).toEqual("test");
  });
  it("return true", () => {
    const userName = new UserName("John");
    const _userName = new UserName("John");
    expect(userName.equals(_userName)).toBe(true);
  });
  it("return false", () => {
    const userName = new UserName("John");
    const _userName = new UserName("Tom");
    expect(userName.equals(_userName)).toBe(false);
  });
});
