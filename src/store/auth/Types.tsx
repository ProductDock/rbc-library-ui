export type UserProfile = {
  fullName: string;
  image: string;
  email: string;
};

export interface IAuthContext {
  userProfile: UserProfile | null;
  isLoggedIn: boolean | null;
  signOut?: () => Promise<any>;
  loaded: boolean;
}
