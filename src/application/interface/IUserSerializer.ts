import { User } from "../../entities/user";

export interface IUserSerializer {
  // TODO: 型
  user(user: User): any;
}
