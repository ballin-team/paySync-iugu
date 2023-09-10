import axios, {AxiosInstance} from 'axios';
import {IIuguConfig} from './types';
import {toCamel, toSnake} from './helpers';

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

  protected inputFormat<T>(data: T) {
    return this.config.toCamelCase ? data : toSnake<T>(data)
  }

  protected responseFormat<T>(data: T) {
    return this.config.toCamelCase ? toCamel<T>(data) : data;
  }
}
