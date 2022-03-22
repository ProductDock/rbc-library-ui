/* eslint-disable no-unused-vars */

export type UserProfile = {
  name: string;
  imageUrl: string;
  email: string;
};

export interface IAuthContext {
  userProfile: UserProfile | null;
  isLoggedIn: boolean | null;
  signIn?: () => void;
  loaded?: boolean;
}
