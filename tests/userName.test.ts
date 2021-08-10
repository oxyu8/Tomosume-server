import { UserName } from "../src/modules/users/domain/userName";

describe("UserName", () => {
  it("return userName", () => {
    const userName = new UserName("test");
    expect(userName.toString()).toEqual("test");
  });
});
