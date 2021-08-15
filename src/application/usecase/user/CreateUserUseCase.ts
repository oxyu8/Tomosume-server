import { User } from "../../../modules/users/domain/user";
import { toUserDTO } from "../../../modules/users/dto/userDTO";

export class CreateUserUseCase {
  // TODO: IUserRepository
  private userRepository: any;

  public constructor(userRepository: any) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    const userDTO = toUserDTO(user);
    return this.userRepository.create(userDTO);
  }
}
