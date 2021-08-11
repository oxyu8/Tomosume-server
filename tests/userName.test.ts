import { UserName } from "../src/modules/users/domain/userName";

describe("UserName", () => {
  it("succeed in creating userName", () => {
    const userName = UserName.create("Tom");
    expect(userName.value).toEqual("Tom");
  });
});
