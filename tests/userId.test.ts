import { UserId } from "../src/modules/users/domain/userId";

describe("UserName", () => {
  it("succeed in creating userName", () => {
    const userName = UserId.create("id1");
    expect(userName.value).toEqual("id1");
  });
});
