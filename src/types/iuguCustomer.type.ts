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
