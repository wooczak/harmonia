declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

export interface ErrorHandling {
  isError: boolean;
  errorMessage?: string;
}