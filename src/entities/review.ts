export class Review {
  public reviewId: string;
  public createUserId: string;
  public shopId: string;
  public rate: number;
  public favoriteMenu: string;

  constructor(
    reviewId: string,
    createUserId: string,
    shopId: string,
    rate: number,
    favoriteMenu: string
  ) {
    this.reviewId = reviewId;
    this.createUserId = createUserId;
    this.shopId = shopId;
    this.rate = rate;
    this.favoriteMenu = favoriteMenu;
  }
}
