import { IReviewRepository } from "../../../application/interface/IReviewRepository";
import { Review } from "../../../entities/review";
import { DB } from "./MemoryDB";

export class ReviewRepositoryImpl implements IReviewRepository {
  public constructor() {
    const review1 = new Review("review1", "user1", "shop1", 5, "testMenu");
    const review2 = new Review("review2", "user2", "shop2", 1, "testMenu2");
    DB.reviews = [review1, review2];
  }

  public async getAllReviews(): Promise<Review[]> {
    return DB.reviews;
  }
}
