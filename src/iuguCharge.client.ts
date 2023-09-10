import {IuguApiRequest} from './iugu.apiRequest';
import {IChargeInput, IChargeOutput, ICreateTokenInput, ICreateTokenOutput, IIuguConfig} from './types';
import {CamelCaseToSnakeNested} from './helpers';

export class IuguChargeClient extends IuguApiRequest {
  constructor(input: IIuguConfig) {
    super(input);
  }

  public async create(input: IChargeInput | CamelCaseToSnakeNested<IChargeInput>) {
    try {
      const response = await this.api.post<IChargeOutput>('/v1/charge', this.inputFormat(input));
      if(!response.data?.success) throw new Error(response.data.message);

      return this.responseFormat(response.data);
    } catch (e) {
      throw e;
    }
  }

  public async createToken(input: ICreateTokenInput | CamelCaseToSnakeNested<ICreateTokenInput>) {
  try {
    const response = await this.api.post<ICreateTokenOutput>('/v1/payment_token', this.inputFormat(input));
    if(!response.data.id) throw new Error(response.data.message);
    return this.responseFormat(response.data);
  } catch (e) {
    throw e;
  }
  }
}
