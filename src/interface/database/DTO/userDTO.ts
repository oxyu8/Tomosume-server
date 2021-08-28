import { User } from "../../../entities/user";

interface UserDTO {
  userName: string;
  userEmail: string;
}

export const toUserDTO = (user: User): UserDTO => {
  return { userName: user.userName, userEmail: user.userEmail };
};
