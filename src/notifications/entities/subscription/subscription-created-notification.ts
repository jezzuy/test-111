/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CustomData } from '../../../entities/index.js';
import { type CollectionMode, type CurrencyCode, type SubscriptionStatus } from '../../../enums/index.js';
import { type ISubscriptionCreatedNotificationResponse } from '../../types/index.js';
import { BillingDetailsNotification, ImportMetaNotification, TimePeriodNotification } from '../shared/index.js';
import { SubscriptionDiscountNotification } from './subscription-discount-notification.js';
import { SubscriptionItemNotification } from './subscription-item-notification.js';
import { SubscriptionScheduledChangeNotification } from './subscription-scheduled-change-notification.js';
import { SubscriptionTimePeriodNotification } from './subscription-time-period-notification.js';

export class SubscriptionCreatedNotification {
  public readonly id: string;
  public readonly status: SubscriptionStatus;
  public readonly transactionId: string;
  public readonly customerId: string;
  public readonly addressId: string;
  public readonly businessId: string | null;
  public readonly currencyCode: CurrencyCode;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly startedAt: string | null;
  public readonly firstBilledAt: string | null;
  public readonly nextBilledAt: string | null;
  public readonly pausedAt: string | null;
  public readonly canceledAt: string | null;
  public readonly discount: SubscriptionDiscountNotification | null;
  public readonly collectionMode: CollectionMode;
  public readonly billingDetails: BillingDetailsNotification | null;
  public readonly currentBillingPeriod: SubscriptionTimePeriodNotification | null;
  public readonly billingCycle: TimePeriodNotification;
  public readonly scheduledChange: SubscriptionScheduledChangeNotification | null;
  public readonly items: SubscriptionItemNotification[];
  public readonly customData: CustomData | null;
  public readonly importMeta: ImportMetaNotification | null;

  constructor(subscription: ISubscriptionCreatedNotificationResponse) {
    this.id = subscription.id;
    this.status = subscription.status;
    this.transactionId = subscription.transaction_id;
    this.customerId = subscription.customer_id;
    this.addressId = subscription.address_id;
    this.businessId = subscription.business_id ? subscription.business_id : null;
    this.currencyCode = subscription.currency_code;
    this.createdAt = subscription.created_at;
    this.updatedAt = subscription.updated_at;
    this.startedAt = subscription.started_at ? subscription.started_at : null;
    this.firstBilledAt = subscription.first_billed_at ? subscription.first_billed_at : null;
    this.nextBilledAt = subscription.next_billed_at ? subscription.next_billed_at : null;
    this.pausedAt = subscription.paused_at ? subscription.paused_at : null;
    this.canceledAt = subscription.canceled_at ? subscription.canceled_at : null;
    this.discount = subscription.discount ? new SubscriptionDiscountNotification(subscription.discount) : null;
    this.collectionMode = subscription.collection_mode;
    this.billingDetails = subscription.billing_details
      ? new BillingDetailsNotification(subscription.billing_details)
      : null;
    this.currentBillingPeriod = subscription.current_billing_period
      ? new SubscriptionTimePeriodNotification(subscription.current_billing_period)
      : null;
    this.billingCycle = new TimePeriodNotification(subscription.billing_cycle);
    this.scheduledChange = subscription.scheduled_change
      ? new SubscriptionScheduledChangeNotification(subscription.scheduled_change)
      : null;
    this.items = subscription.items.map((item) => new SubscriptionItemNotification(item));
    this.customData = subscription.custom_data ? subscription.custom_data : null;
    this.importMeta = subscription.import_meta ? new ImportMetaNotification(subscription.import_meta) : null;
  }
}
