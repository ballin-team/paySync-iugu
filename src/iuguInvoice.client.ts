import {IuguApiRequest} from './iugu.apiRequest';

export interface ICreateInvoice {
  email: string;
  cc_emails?: string;
  due_date: string;
  ensure_workday_due_date?: boolean;
  expires_in?: string;
  bank_slip_extra_due?: string;
  items: {
    description: string;
    quantity?: number;
    price_cents?: number;
  }[];
  return_url?: string;
  expired_url?: string;
  notification_url?: string;
  ignore_canceled_email?: boolean;
  fines?: boolean;
  late_payment_fine?: number;
  late_payment_fine_cents?: number;
  per_day_interest?: boolean;
  per_day_interest_value?: number;
  per_day_interest_cents?: number;
  discount_cents?: number;
  customer_id?: string;
  ignore_due_email?: boolean;
  subscription_id?: string;
  payable_with?: string[];
  credits?: number;
  custom_variables?: {
    name: string;
    value: string;
  }[];
  early_payment_discount?: boolean;
  early_payment_discounts?: {
    days: number;
    percent: number;
    value_cents: number;
  }[];
  payer?: {
    cpf_cnpj?: string;
    name?: string;
    phone_prefix?: string;
    phone?: string;
    email?: string;
    address?: {
      zip_code?: string;
      street?: string;
      number?: string;
      district?: string;
      city?: string;
      state?: string;
      country?: string;
      complement?: string;
    }
  };
  order_id?: string;
  commissions?: {
    cents?: number;
    percent?: number;
    credit_card_cents?: number;
    credit_card_percent?: number;
    bank_slip_cents?: number;
    bank_slip_percent?: number;
    pix_cents?: number;
    pix_percent?: number;
    permit_aggregated?: boolean;
  };
  external_reference?: string;
  max_installments_value?: number;
  splits?: {
    recipient_account_id?: string;
    cents?: number;
    percent?: number;
    bank_slip_cents?: number;
    bank_slip_percent?: number;
    credit_card_cents?: number;
    credit_card_percent?: number;
    pix_cents?: number;
    pix_percent?: number;
    permit_aggregated?: boolean;
    credit_card_1x_cents?: string;
    credit_card_2x_cents?: string;
    credit_card_3x_cents?: string;
    credit_card_4x_cents?: string;
    credit_card_5x_cents?: string;
    credit_card_6x_cents?: string;
    credit_card_7x_cents?: string;
    credit_card_8x_cents?: string;
    credit_card_9x_cents?: string;
    credit_card_10x_cents?: string;
    credit_card_11x_cents?: string;
    credit_card_12x_cents?: string;
    credit_card_1x_percent?: string;
    credit_card_2x_percent?: string;
    credit_card_3x_percent?: string;
    credit_card_4x_percent?: string;
    credit_card_5x_percent?: string;
    credit_card_6x_percent?: string;
    credit_card_7x_percent?: string;
    credit_card_8x_percent?: string;
    credit_card_9x_percent?: string;
    credit_card_10x_percent?: string;
    credit_card_11x_percent?: string;
    credit_card_12x_percent?: string;
  }[];
  RAW_BODY?: string;
  password?: string;
}

export interface ICreateInvoiceOutput {
  id: string;
  due_date: string;
  currency: string;
  discount_cents: number;
  email: string;
  items_total_cents: number;
  notification_url?: string;
  return_url?: string;
  status: string;
  tax_cents: number;
  total_cents: number;
  total_paid_cents: number;
  taxes_paid_cents?: number;
  paid_at?: string;
  paid_cents?: number;
  cc_emails?: string;
  financial_return_date?: string;
  payable_with: string;
  overpaid_cents?: number;
  ignore_due_email: true;
  ignore_canceled_email: true;
  advance_fee_cents?: number;
  commission_cents?: number;
  early_payment_discount: false;
  order_id?: string;
  updated_at: string;
  credit_card_brand?: string;
  credit_card_bin?: string;
  credit_card_last_4?: string;
  credit_card_captured_at?: string;
  credit_card_tid?: string;
  external_reference?: string;
  max_installments_value?: number;
  payer_name: string;
  payer_email?: string;
  payer_cpf_cnpj: string;
  payer_phone: string;
  payer_phone_prefix: string;
  payer_address_zip_code: string;
  payer_address_street: string;
  payer_address_district: string;
  payer_address_city: string;
  payer_address_state: string;
  payer_address_number: string;
  payer_address_complement: null;
  payer_address_country: string;
  late_payment_fine?: number;
  late_payment_fine_cents: number;
  split_id?: string;
  external_payment_id?: string;
  external_payment_description?: string;
  account_id: string;
  bank_account_branch: string;
  bank_account_number: string;
  account_name: string;
  secure_id: string;
  secure_url: string;
  customer_id?: string;
  customer_ref?: string;
  customer_name?: string;
  user_id?: string;
  total: string;
  taxes_paid: string;
  total_paid: string;
  total_overpaid: string;
  total_refunded: string;
  commission: string;
  fines_on_occurrence_day: string;
  total_on_occurrence_day: string;
  fines_on_occurrence_day_cents: number;
  total_on_occurrence_day_cents: number;
  refunded_cents: number;
  remaining_captured_cents: number;
  advance_fee?: boolean;
  estimated_advance_fee?: number;
  paid: string;
  original_payment_id?: string;
  double_payment_id?: string;
  per_day_interest: boolean;
  per_day_interest_value?: number;
  per_day_interest_cents: number;
  interest?: number;
  discount?: number;
  duplicated_invoice_id?: string;
  bank_slip_extra_due: number;
  created_at: string;
  created_at_iso: string;
  authorized_at?: string;
  authorized_at_iso?: string;
  expired_at?: string;
  expired_at_iso?: string;
  refunded_at?: string;
  refunded_at_iso?: string;
  canceled_at?: string;
  canceled_at_iso?: string;
  protested_at?: string;
  protested_at_iso?: string;
  chargeback_at?: string;
  chargeback_at_iso?: string;
  occurrence_date?: string;
  refundable?: boolean;
  installments?: number;
  transaction_number: number;
  payment_method?: string;
  financial_return_dates?: string;
  bank_slip: {
    digitable_line: string;
    barcode_data: string;
    barcode: string;
    bank_slip_bank: number;
    bank_slip_status: string;
    bank_slip_error_code: string;
    bank_slip_error_message?: string
  };
  pix: {
    qrcode: string;
    qrcode_text: string;
    status: string;
    payer_cpf_cnpj?: string;
    payer_name?: string;
    end_to_end_id?: string;
    end_to_end_refund_id?: string;
  };
  items:     {
    id: string;
    description: string;
    price_cents: number;
    quantity: number;
    created_at: string;
    updated_at: string;
    price: string;
  }[];
  early_payment_discounts: [];
  split_rules?: string;
  variables: {
    variable: string;
    value: string;
  }[];
  custom_variables: {
    variable: string;
    value: string;
  }[];
  logs: {
    id: string;
    description: string;
    notes: string;
    created_at: string;
  }[];
  credit_card_transaction?: string;
}

export class IuguInvoiceClient extends IuguApiRequest {
  public async create(input: ICreateInvoice) {
    try {
      const response = await this.api.post<ICreateInvoiceOutput>('/v1/invoices', input);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
