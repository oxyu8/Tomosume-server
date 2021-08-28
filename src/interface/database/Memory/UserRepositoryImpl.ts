import { IUserRepository } from "../../../application/interface/IUserRepository";
import { User } from "../../../modules/users/domain/user";
import { DB } from "./MemoryDB";

// ref to ddd
export class UserRepositoryImpl implements IUserRepository {
  public constructor() {
    const user1 = new User("a", "user-1", "user1@mail.com");
    const user2 = new User("b", "user-2", "user2@mail.com");
    DB.users = [user1, user2];
  }

  public async create(user: User): Promise<User> {
    const newUser = new User(user.uid, user.userName, user.userEmail);
    DB.users.push(newUser);
    return newUser;
  }

  public async getAllUsers(): Promise<User[]> {
    return DB.users;
  }
}
