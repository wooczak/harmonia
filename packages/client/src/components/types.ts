export interface ErrorHandling {
  isError: boolean;
  errorMessage?: string;
}

export enum ButtonType {
  CALL_TO_ACTION,
  PRIMARY,
  SECONDARY,
  TERTIARY
}