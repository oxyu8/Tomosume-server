import { Review } from "../../../entities/review";
import { toReviewDTO } from "../../../interface/database/DTO/reviewDTO";
import { IReviewRepository } from "../../interface/IReviewRepository";

export class CreateReviewUseCase {
  private reviewRepository: IReviewRepository;

  public constructor(reviewRepository: IReviewRepository) {
    this.reviewRepository = reviewRepository;
  }
  public createReview(review: Review): Promise<Review> {
    const reviewDTO = toReviewDTO(review);
    return this.reviewRepository.createReview(reviewDTO);
  }
}
