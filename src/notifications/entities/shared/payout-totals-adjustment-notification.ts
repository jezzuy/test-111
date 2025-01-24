/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ChargebackFeeNotification } from './chargeback-fee-notification.js';
import { type PayoutCurrencyCode } from '../../../enums/index.js';
import { type IPayoutTotalsAdjustmentNotificationResponse } from '../../types/index.js';

export class PayoutTotalsAdjustmentNotification {
  public readonly subtotal: string;
  public readonly tax: string;
  public readonly total: string;
  public readonly fee: string;
  public readonly chargebackFee: ChargebackFeeNotification | null;
  public readonly earnings: string;
  public readonly currencyCode: PayoutCurrencyCode;

  constructor(payoutTotalsAdjustment: IPayoutTotalsAdjustmentNotificationResponse) {
    this.subtotal = payoutTotalsAdjustment.subtotal;
    this.tax = payoutTotalsAdjustment.tax;
    this.total = payoutTotalsAdjustment.total;
    this.fee = payoutTotalsAdjustment.fee;
    this.chargebackFee = payoutTotalsAdjustment.chargeback_fee
      ? new ChargebackFeeNotification(payoutTotalsAdjustment.chargeback_fee)
      : null;
    this.earnings = payoutTotalsAdjustment.earnings;
    this.currencyCode = payoutTotalsAdjustment.currency_code;
  }
}
