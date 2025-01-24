/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Collection } from '../../internal/base/index.js';
import { type IPriceResponse } from '../../types/index.js';
import { Price } from './price.js';

export class PriceCollection extends Collection<IPriceResponse, Price> {
  override fromJson(data: IPriceResponse): Price {
    return new Price(data);
  }
}
