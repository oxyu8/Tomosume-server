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

  public sconsole(): any {
    let t = new User("test", "tel", 1, 1, 1);
    console.log(typeof t);
    console.log(new User("test", "taaaaaaaaaal", 1, 1, 1));
    console.log(t);
  }
}

const t = new User();
console.log(t.sconsole());
