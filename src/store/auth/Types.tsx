export type UserProfile = {
  fullName: string;
  image: string;
  email: string;
  role: string;
};

export interface IAuthContext {
  userProfile: UserProfile | null;
  isLoggedIn: boolean | null;
  signOut?: () => Promise<any>;
  isUserAdmin?: () => Boolean;
  loaded: boolean;
}
