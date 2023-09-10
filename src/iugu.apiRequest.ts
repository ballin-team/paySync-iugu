import axios, {AxiosInstance} from 'axios';
import {IIuguConfig} from './types';

export class IuguApiRequest {
  protected config: IIuguConfig;
  protected api: AxiosInstance;
  constructor(input: IIuguConfig) {
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
