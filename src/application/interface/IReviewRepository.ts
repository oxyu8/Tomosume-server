import { Review } from "../../entities/review";

export interface IReviewRepository {
  getAllReviews(): Promise<Review[]>;
}
