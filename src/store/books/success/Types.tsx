export interface ISuccessScreenContext {
  successMessage: string;
  gratitudeMessage: string;
  showed: boolean;
  showSuccessScreen?: Function;
  hideSuccessScreen?: () => void;
}
