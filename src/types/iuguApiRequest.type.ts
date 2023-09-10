export interface IIuguConfig {
  timeout?: number;
  credentials: {
    apiToken: string;
  }
  toCamelCase?: boolean;
}
