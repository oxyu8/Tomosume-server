import { CreateUserUseCase } from "../../application/usecase/user/CreateUserUseCase";
import { User } from "../../modules/users/domain/user";
import { UserRepository } from "../database/UserRepository";

export class UserController {
  private userRepository: UserRepository;

  public constructor(dbConnection: any) {
    this.userRepository = new UserRepository(dbConnection);
  }
  public async createUser() {
    const useCase = new CreateUserUseCase(this.userRepository);
    const user = User.create("id", "name", "email");
    const result = await useCase.createUser(user);
  }
}
