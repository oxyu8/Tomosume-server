import { CreateUserUseCase } from "../../application/usecase/user/CreateUserUseCase";
import { GetAllUsersUseCase } from "../../application/usecase/user/GetAllUsersUseCase";
import { User } from "../../entities/user";
import { UserRepositoryImpl } from "../database/Memory/UserRepositoryImpl";
import { CreateUserRequest } from "../request/CreateUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";

export class UserController {
  private userRepository: UserRepositoryImpl;
  private userSerializer: UserSerializer;

  public constructor() {
    this.userRepository = new UserRepositoryImpl();
    this.userSerializer = new UserSerializer();
  }
  public async getAllUsers() {
    const useCase = new GetAllUsersUseCase(this.userRepository);
    const result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }
  public async createUser(req: any) {
    try {
      const userParams = new CreateUserRequest(req);
      const useCase = new CreateUserUseCase(this.userRepository);
      const user = new User("c", userParams.userName, userParams.userEmail);
      const result = await useCase.createUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}
