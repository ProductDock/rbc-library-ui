export class TokenStorage {
  public static removeAccessToken(): void {
    localStorage.removeItem("accessToken");
  }

  public static setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  public static getAccessToken(): string {
    const token = localStorage.getItem("accessToken");
    return token ? `Bearer ${token}` : "";
  }
}
