import { CreateReviewUseCase } from "../../application/usecase/review/CreateReviewUseCase";
import { GetAllReviewsUseCase } from "../../application/usecase/review/GetAllReviewsUseCase";
import { Review } from "../../entities/review";
import { ReviewRepositoryImpl } from "../database/Memory/ReviewRepositoryImpl";
import { CreateReviewRequest } from "../request/CreateReviewRequest";
import { ReviewSerializer } from "../serializer/ReviewSerializer";

export class ReviewController {
  private reviewRepository: ReviewRepositoryImpl;
  private reviewSerializer: ReviewSerializer;

  public constructor() {
    this.reviewRepository = new ReviewRepositoryImpl();
    this.reviewSerializer = new ReviewSerializer();
  }
  public async createReview(req: any) {
    const reviewParams = new CreateReviewRequest(req);
    const useCase = new CreateReviewUseCase(this.reviewRepository);
    const review = new Review(
      "review3",
      reviewParams.createUserId,
      reviewParams.shopId,
      reviewParams.rate,
      reviewParams.favoriteMenu
    );
    const result = await useCase.createReview(review);
    return this.reviewSerializer.createReview(result);
  }
  public async getAllReviews() {
    const useCase = new GetAllReviewsUseCase(this.reviewRepository);
    const result = await useCase.getAllReviews();
    return this.reviewSerializer.reviews(result);
  }
}
