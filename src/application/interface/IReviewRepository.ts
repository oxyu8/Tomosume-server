import { Review } from "../../entities/review";
import { ReviewDTO } from "../../interface/database/DTO/reviewDTO";

export interface IReviewRepository {
  getAllReviews(): Promise<Review[]>;
  createReview(review: ReviewDTO): Promise<Review>;
}
