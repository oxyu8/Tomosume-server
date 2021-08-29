import { Review } from "../../entities/review";
import { BaseSerializer } from "./BaseSerializer";

export class ReviewSerializer extends BaseSerializer {
  public createReview(data: Review) {
    if (!data) {
      return {
        code: "errorCode",
        message: "data is null(no users)",
        responsedAt: "time",
      };
    }
    return {
      code: "successCode",
      data: {
        reviewId: data.reviewId,
        createUserId: data.createUserId,
        shopId: data.shopId,
        rate: data.rate,
        favoriteMenu: data.favoriteMenu,
      },
      responsedAt: "time",
    };
  }
  public reviews(data: Review[]) {
    if (!data) {
      return {
        code: "errorCode",
        message: "data is null(no users)",
        responsedAt: "time",
      };
    }
    return {
      code: "successCode",
      data: data.map((d): Review => {
        return {
          reviewId: d.reviewId,
          createUserId: d.createUserId,
          shopId: d.shopId,
          rate: d.rate,
          favoriteMenu: d.favoriteMenu,
        };
      }),
      responsedAt: "time",
    };
  }
}
