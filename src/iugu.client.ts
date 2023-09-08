import {IIuguConfig, IuguApiRequest} from './iugu.apiRequest';
import {IuguInvoiceClient} from './iuguInvoice.client';
import {IuguCustomerClient} from './iuguCustomer.client';
import {IuguChargeClient} from './iuguCharge.client';

export class IuguClient extends IuguApiRequest{
  public invoice: IuguInvoiceClient;
  public customer: IuguCustomerClient;
  public charge: IuguChargeClient;

  constructor(input: IIuguConfig) {
    super(input);
    this.invoice = new IuguInvoiceClient(input);
    this.customer = new IuguCustomerClient(input);
    this.charge = new IuguChargeClient(input);
  }
}
