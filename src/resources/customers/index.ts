/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { BaseResource, PathParameters, QueryParameters } from '../../internal/base/index.js';
import {
  type CreateCustomerRequestBody,
  type GetCreditBalanceQueryParameters,
  type ListCustomerQueryParameters,
  type UpdateCustomerRequestBody,
} from './operations/index.js';
import { CreditBalance, Customer, CustomerCollection, AuthToken } from '../../entities/index.js';
import { type ICreditBalanceResponse, type ICustomerResponse, type IAuthTokenResponse } from '../../types/index.js';
import { type Response, type ErrorResponse } from '../../internal/index.js';

const CustomerPaths = {
  list: '/customers',
  create: '/customers',
  get: '/customers/{customer_id}',
  update: '/customers/{customer_id}',
  getCustomerBalance: '/customers/{customer_id}/credit-balances',
  generate: '/customers/{customer_id}/auth-token',
} as const;

export * from './operations/index.js';

export class CustomersResource extends BaseResource {
  public list(queryParams?: ListCustomerQueryParameters): CustomerCollection {
    const queryParameters = new QueryParameters(queryParams);
    return new CustomerCollection(this.client, CustomerPaths.list + queryParameters.toQueryString());
  }

  public async create(createCustomerParameters: CreateCustomerRequestBody): Promise<Customer> {
    const response = await this.client.post<CreateCustomerRequestBody, Response<ICustomerResponse> | ErrorResponse>(
      CustomerPaths.create,
      createCustomerParameters,
    );

    const data = this.handleResponse<ICustomerResponse>(response);

    return new Customer(data);
  }

  public async get(customerId: string): Promise<Customer> {
    const urlWithPathParams = new PathParameters(CustomerPaths.get, {
      customer_id: customerId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<ICustomerResponse> | ErrorResponse>(urlWithPathParams);

    const data = this.handleResponse<ICustomerResponse>(response);

    return new Customer(data);
  }

  public async update(customerId: string, updateCustomer: UpdateCustomerRequestBody): Promise<Customer> {
    const urlWithPathParams = new PathParameters(CustomerPaths.update, {
      customer_id: customerId,
    }).deriveUrl();

    const response = await this.client.patch<UpdateCustomerRequestBody, Response<ICustomerResponse> | ErrorResponse>(
      urlWithPathParams,
      updateCustomer,
    );

    const data = this.handleResponse<ICustomerResponse>(response);

    return new Customer(data);
  }

  public async getCreditBalance(
    customerId: string,
    queryParams?: GetCreditBalanceQueryParameters,
  ): Promise<CreditBalance[]> {
    const urlWithPathParams = new PathParameters(CustomerPaths.getCustomerBalance, {
      customer_id: customerId,
    }).deriveUrl();
    const queryParameters = new QueryParameters(queryParams);

    const response = await this.client.get<
      GetCreditBalanceQueryParameters | undefined,
      Response<ICreditBalanceResponse[]> | ErrorResponse
    >(urlWithPathParams, queryParameters);

    const data = this.handleResponse<ICreditBalanceResponse[]>(response);

    return data.map((balance) => new CreditBalance(balance));
  }

  public async archive(customerId: string) {
    return await this.update(customerId, { status: 'archived' });
  }

  public async generateAuthToken(customerId: string): Promise<AuthToken> {
    const urlWithPathParams = new PathParameters(CustomerPaths.generate, {
      customer_id: customerId,
    }).deriveUrl();

    const response = await this.client.post<undefined, Response<IAuthTokenResponse> | ErrorResponse>(
      urlWithPathParams,
      undefined,
    );

    const data = this.handleResponse<IAuthTokenResponse>(response);

    return new AuthToken(data);
  }
}
