import axios, {AxiosInstance} from 'axios';

export interface IIuguConfig {
  timeout?: number;
  credentials: {
    apiToken: string;
  }
}

export class IuguApiRequest {
  protected config: IIuguConfig;
  protected api: AxiosInstance;
  protected constructor(input: IIuguConfig) {
    this.config = input;
    this.api = axios.create({
      baseURL: 'https://api.iugu.com',
      timeout: input.timeout || 30000,
      headers: {
        'Authorization': `Basic ${btoa(`${input.credentials.apiToken}:`)}`,
      },
      validateStatus: ((status) => status === 200)
    });
  }
}
