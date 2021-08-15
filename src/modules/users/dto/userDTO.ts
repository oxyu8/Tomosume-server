import { User } from "../domain/user";

interface UserDTO {
  userName: string;
}

export const toUserDTO = (user: User): UserDTO => {
  return { userName: user.userName };
};
