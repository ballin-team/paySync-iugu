import {IuguApiRequest} from './iugu.apiRequest';
import {ICreateCustomerInput, ICreateCustomerOutput, IUpdateCustomerInput} from './types';

export class IuguCustomerClient extends IuguApiRequest {
  public async create(input: ICreateCustomerInput) {
    try {
      const response = await this.api.post<ICreateCustomerOutput>('/v1/customers', input);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async update(id: string, data: Partial<IUpdateCustomerInput>) {
    try {
      const response = await this.api.put<ICreateCustomerOutput>(`/v1/customers/${id}`, data);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async delete(id: string) {
    try {
      const response = await this.api.delete<ICreateCustomerOutput>(`/v1/customers/${id}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async getById(id: string) {
    try {
      const response = await this.api.get<ICreateCustomerOutput>(`/v1/customers/${id}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async get(input: any) {
    try {
      const response = await this.api.get<ICreateCustomerOutput>('/v1/customers', { params: input });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
