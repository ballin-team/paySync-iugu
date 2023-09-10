import {IuguApiRequest} from './iugu.apiRequest';
import {IChargeInput, IChargeOutput, ICreateTokenInput, ICreateTokenOutput} from './types';

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

  public async createToken(input: ICreateTokenInput) {
  try {
    const response = await this.api.post<ICreateTokenOutput>('/v1/payment_token', input);
    if(!response.data.id) throw new Error(response.data.message);
    return response.data;
  } catch (e) {
    throw e;
  }
  }
}
