import {IuguApiRequest} from './iugu.apiRequest';
import {
  ICreateCustomerInput,
  ICreateCustomerOutput,
  IGetCustomerInput,
  IUpdateCustomerInput
} from './types';
import {CamelCaseToSnakeNested} from '@ballin-team/data-format';

export class IuguCustomerClient extends IuguApiRequest {
  public async create(input: ICreateCustomerInput | CamelCaseToSnakeNested<ICreateCustomerInput>) {
    try {
      const response = await this.api.post<ICreateCustomerOutput>('/v1/customers', this.inputFormat(input));
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async update(id: string, data: Partial<IUpdateCustomerInput | CamelCaseToSnakeNested<IUpdateCustomerInput>>) {
    try {
      const response = await this.api.put<ICreateCustomerOutput>(`/v1/customers/${id}`, this.inputFormat(data));
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async delete(id: string) {
    try {
      const response = await this.api.delete<ICreateCustomerOutput>(`/v1/customers/${id}`);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async getById(id: string) {
    try {
      const response = await this.api.get<ICreateCustomerOutput>(`/v1/customers/${id}`);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async get(input: IGetCustomerInput) {
    try {
      const response = await this.api.get<ICreateCustomerOutput>('/v1/customers', { params: this.inputFormat(input) });
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }
}
