interface Params {
  createUserId: string;
  shopId: string;
  rate: number;
  favoriteMenu: string;
}

export class CreateReviewRequest {
  private _createUserId: string;
  private _shopId: string;
  private _rate: number;
  private _favoriteMenu: string;

  public get createUserId() {
    return this._createUserId;
  }

  public get shopId() {
    return this._shopId;
  }

  public get rate() {
    return this._rate;
  }

  public get favoriteMenu() {
    return this._favoriteMenu;
  }

  public constructor(params: Params) {
    this._createUserId = params.createUserId;
    this._shopId = params.shopId;
    this._rate = params.rate;
    this._favoriteMenu = params.favoriteMenu;
  }

  // TODO: validatation
}
