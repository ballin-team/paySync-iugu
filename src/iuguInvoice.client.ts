import {IuguApiRequest} from './iugu.apiRequest';
import {ICreateInvoice, ICreateInvoiceOutput, IDuplicateInvoiceInput, IGetByIdInvoiceInput} from './types';

export class IuguInvoiceClient extends IuguApiRequest {
  public async create(input: ICreateInvoice) {
    try {
      const response = await this.api.post<ICreateInvoiceOutput>('/v1/invoices', input);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public  async refund(input: {id: string, amountInCents?: number}) {
    try {
      const { id, amountInCents } = input;
      const response = await this.api.post<ICreateInvoiceOutput>(`/v1/invoices/${id}/refund`, { partial_value_refund_cents: amountInCents });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async cancel(id: string) {
    try {
      const response = await this.api.put<ICreateInvoiceOutput>(`/v1/invoices/${id}/cancel`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async duplicate(id: string, body: IDuplicateInvoiceInput) {
    try {

      const response = await this.api.put<ICreateInvoiceOutput>(`/v1/invoices/${id}/duplicate`, body);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async getById(id: string) {
    try {

      const response = await this.api.get<ICreateInvoiceOutput>(`/v1/invoices/${id}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async get(input: IGetByIdInvoiceInput) {
    try {

      const response = await this.api.get<ICreateInvoiceOutput>('/v1/invoices');
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async externallyPayed(id: string) {
    try {
      const response = await this.api.get<ICreateInvoiceOutput>(`/v1/invoices/${id}/externally_pay`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
