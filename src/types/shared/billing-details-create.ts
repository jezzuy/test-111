/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ITimePeriod } from './time-period.js';

export interface IBillingDetailsCreate {
  enableCheckout?: boolean;
  purchaseOrderNumber?: string;
  additionalInformation?: string | null;
  paymentTerms: ITimePeriod;
}
