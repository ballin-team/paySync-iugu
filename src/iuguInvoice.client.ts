import {IuguApiRequest} from './iugu.apiRequest';
import {
  ICreateInvoice,
  ICreateInvoiceOutput,
  IDuplicateInvoiceInput,
  IGetByIdInvoiceInput
} from './types';

export class IuguInvoiceClient extends IuguApiRequest {
  public async create(input: ICreateInvoice) {
    try {
      const response = await this.api.post<ICreateInvoiceOutput>('/v1/invoices', this.inputFormat(input));
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public  async refund(id: string, body: { amount_in_cents?: number;}) {
    try {
      const response = await this.api.post<ICreateInvoiceOutput>(`/v1/invoices/${id}/refund`, body ? this.inputFormat(body) : undefined);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async cancel(id: string) {
    try {
      const response = await this.api.put<ICreateInvoiceOutput>(`/v1/invoices/${id}/cancel`);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async duplicate(id: string, body: IDuplicateInvoiceInput) {
    try {

      const response = await this.api.put<ICreateInvoiceOutput>(`/v1/invoices/${id}/duplicate`, this.inputFormat(body));
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async getById(id: string) {
    try {

      const response = await this.api.get<ICreateInvoiceOutput>(`/v1/invoices/${id}`);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async get(input: IGetByIdInvoiceInput) {
    try {

      const response = await this.api.get<ICreateInvoiceOutput>('/v1/invoices');
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async externallyPayed(id: string) {
    try {
      const response = await this.api.get<ICreateInvoiceOutput>(`/v1/invoices/${id}/externally_pay`);
      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }
}
