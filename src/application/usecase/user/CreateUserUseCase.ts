import { User } from "../../../modules/users/domain/user";
import { toUserDTO } from "../../../modules/users/dto/userDTO";
import { IUserRepository } from "../../interface/IUserRepository";

export class CreateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    const userDTO = toUserDTO(user);
    console.log("dto", userDTO);
    return this.userRepository.create(userDTO);
  }
}
