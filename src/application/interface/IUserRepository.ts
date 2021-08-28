import { User } from "../../entities/user";

// インタフェースに対して，各Repositoryクラスが実装をする．
export interface IUserRepository {
  create(user: any): Promise<User>;
  getAllUsers(): Promise<User[]>;
}
