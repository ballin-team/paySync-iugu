import {IuguApiRequest} from './iugu.apiRequest';

export interface ICreateCustomerInput {
  email: string;
  name: string;
  notes?: string;
  phone?: number;
  phone_prefix?: number;
  cpf_cnpj?: string;
  cc_emails?: string;
  zip_code?: string;
  number?: string;
  street?: string;
  city?: string;
  state?: string;
  district?: string;
  complement?: string;
  custom_variables?: {
    name: string;
    value: string;
  }[]
}

export interface ICreateCustomerOutput {
  "id": string;
  "email": string;
  "name": string;
  "notes": string;
  "created_at": string;
  "updated_at": string;
  "custom_variables": { [key: string]: string }[]
}

export interface IUpdateCustomerInput extends  ICreateCustomerInput {
  default_payment_method_id: string;
}


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
