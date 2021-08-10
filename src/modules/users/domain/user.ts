class User {
  constructor(
    private userId?: string,
    private userName?: string,
    private followerCount?: number,
    private followeeCount?: number,
    private reviewCount?: number
  ) {
    this.userId = userId;
    this.userName = userName;
    this.followeeCount = followeeCount;
    this.followerCount = followerCount;
    this.reviewCount = reviewCount;
  }

  get id(): any {
    return this.id;
  }
}
