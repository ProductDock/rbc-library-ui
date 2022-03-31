export type UserProfile = {
  name: string;
  imageUrl: string;
  email: string;
  googleAccessToken: string;
};

export interface IAuthContext {
  userProfile: UserProfile | null;
  isLoggedIn: boolean | null;
  signIn?: () => void;
  signOut?: () => Promise<any>;
  loaded?: boolean;
}
