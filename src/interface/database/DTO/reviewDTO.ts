import { Review } from "../../../entities/review";

export interface ReviewDTO {
  createUserId: string;
  shopId: string;
  rate: number;
  favoriteMenu: string;
}

export const toReviewDTO = (review: Review) => {
  return {
    createUserId: review.createUserId,
    shopId: review.shopId,
    rate: review.rate,
    favoriteMenu: review.favoriteMenu,
  };
};
