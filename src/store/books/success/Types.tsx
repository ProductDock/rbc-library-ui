export interface ISuccessScreenContext {
  successMessage: string;
  gratitudeMessage: string;
  showed: boolean;
  warning: boolean;
  showWarningScreen?: Function;
  showSuccessScreen?: Function;
  hideSuccessScreen?: () => void;
}
