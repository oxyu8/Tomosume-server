import { GetAllReviewsUseCase } from "../../application/usecase/review/GetAllReviewsUseCase";
import { ReviewRepositoryImpl } from "../database/Memory/ReviewRepositoryImpl";
import { ReviewSerializer } from "../serializer/ReviewSerializer";

export class ReviewController {
  private reviewRepository: ReviewRepositoryImpl;
  private reviewSerializer: ReviewSerializer;

  public constructor() {
    this.reviewRepository = new ReviewRepositoryImpl();
    this.reviewSerializer = new ReviewSerializer();
  }
  public async getAllReviews() {
    const useCase = new GetAllReviewsUseCase(this.reviewRepository);
    const result = await useCase.getAllReviews();
    return this.reviewSerializer.reviews(result);
  }
}
