import { User } from "../../modules/users/domain/user";

export interface IUserSerializer {
  // TODO: 型
  user(user: User): any;
}
