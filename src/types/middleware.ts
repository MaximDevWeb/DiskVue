export type MiddlewareType = {
  rule(data?: any): void;
  action(): void;
};
