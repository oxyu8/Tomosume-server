import { UniqueEntityID } from "../../../shared/UniqueEntityID";
// import { Result } from "../../../shared/core/Result";
import { Entity } from "../../../shared/Entity";

export class UserId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id;
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  // public static create(id?: UniqueEntityID): Result<UserId> {
  //   return Result.ok<UserId>(new UserId(id));
  // }
}
