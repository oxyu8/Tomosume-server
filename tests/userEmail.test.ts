import { UserEmail } from "../src/modules/users/domain/userEmail";

describe("userEmail", () => {
  it("succeed in creating userEmail", () => {
    const userEmail = UserEmail.create("test@gmail.com");
    //@ts-ignore
    expect(userEmail.value).toBe("test@gmail.com");
  });
  it("fail to create userEmail", () => {
    const userEmail = UserEmail.create("notValidValue");
    //@ts-ignore
    expect(userEmail).toBe("Not Valid");
  });
});
