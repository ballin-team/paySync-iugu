import axios, {AxiosInstance} from 'axios';
import {IIuguConfig} from './types';
import {camelToSnake, snakeToCamel} from '@ballin-team/data-format';

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
    return this.config.toCamelCase ? data : camelToSnake<T>(data)
  }

  protected responseFormat<T>(data: T) {
    return this.config.toCamelCase ? snakeToCamel<T>(data) : data;
  }
}
