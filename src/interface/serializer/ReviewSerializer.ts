import { Review } from "../../entities/review";
import { BaseSerializer } from "./BaseSerializer";

export class ReviewSerializer extends BaseSerializer {
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
