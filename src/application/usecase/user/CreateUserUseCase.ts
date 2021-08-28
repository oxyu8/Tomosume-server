import { User } from "../../../entities/user";
import { toUserDTO } from "../../../interface/database/DTO/userDTO";
import { IUserRepository } from "../../interface/IUserRepository";

export class CreateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    const userDTO = toUserDTO(user);
    return this.userRepository.create(userDTO);
  }
}
