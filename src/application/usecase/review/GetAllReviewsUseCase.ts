import { IReviewRepository } from "../../interface/IReviewRepository";

export class GetAllReviewsUseCase {
  private reviewRepository: IReviewRepository;

  public constructor(reviewRepository: IReviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  public getAllReviews() {
    return this.reviewRepository.getAllReviews();
  }
}
