import { IReviewRepository } from "../../../application/interface/IReviewRepository";
import { Review } from "../../../entities/review";
import { ReviewDTO } from "../DTO/reviewDTO";
import { DB } from "./MemoryDB";

export class ReviewRepositoryImpl implements IReviewRepository {
  public constructor() {
    const review1 = new Review("review1", "user1", "shop1", 5, "testMenu");
    const review2 = new Review("review2", "user2", "shop2", 1, "testMenu2");
    DB.reviews = [review1, review2];
  }

  public async createReview(reviewDTO: ReviewDTO): Promise<Review> {
    const newReviewId = "review3";
    const newReview = new Review(
      newReviewId,
      reviewDTO.createUserId,
      reviewDTO.shopId,
      reviewDTO.rate,
      reviewDTO.favoriteMenu
    );
    DB.reviews.push(newReview);
    return newReview;
  }
  public async getAllReviews(): Promise<Review[]> {
    return DB.reviews;
  }
}
