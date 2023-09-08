import {IuguApiRequest} from './iugu.apiRequest';

export interface IChargeInput {
  method?: 'bank_slip';
  token?: string;
  customer_payment_method_id?: string;
  restrict_payment_method?: boolean;
  customer_id: string;
  invoice_id: string;
  email?: string;
  months?: number;
  discount_cents?: number;
  bank_slip_extra_days?: number;
  keep_dunning?: boolean;
  items: {
    description: string;
    quantity: number;
    price_cents: number;
  }[];
  payer: {
    cpf_cnpj: string;
    name: string;
    phone_prefix: string;
    phone: string;
    address: {
      street: string;
      number: string;
      district: string;
      city: string;
      state: string;
      zip_code: string;
      complement: string;
    }
  }
  order_id?: string;
}

export interface IChargeOutput {
  message?: string;
  errors?: any;
  success: boolean;
  url: string;
  pdf: string;
  identification?: string,
  invoice_id: string;
  LR?: string;
  reversible?: boolean;
  token?: string;
  brand?: string;
  bin?: string;
  last4?: string;
}

export class IuguChargeClient extends IuguApiRequest {
  public async create(input: IChargeInput) {
    try {
      const response = await this.api.post<IChargeOutput>('/v1/charge', input);
      if(!response.data?.success) throw new Error(response.data.message);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
