import { IUserRepository } from "../../interface/IUserRepository";

export class GetAllUsersUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public getAllUsers() {
    return this.userRepository.getAllUsers();
  }
}
