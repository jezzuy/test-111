/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ITransactionNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const TransactionPastDueMock: IEventsResponse<ITransactionNotificationResponse> = {
  event_id: 'evt_01h8e2sys80rn6y8xz31mstgt9',
  event_type: 'transaction.past_due',
  occurred_at: '2023-08-22T07:37:04.552638Z',
  notification_id: 'ntf_01h8e2syvt2n0sk9m8csp27k5q',
  data: {
    id: 'txn_01h8e2svn94ze7bfj0zfh7z6wm',
    items: [
      {
        price: {
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          status: 'active',
          quantity: { maximum: 999, minimum: 10 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          unit_price: { amount: '3000', currency_code: 'USD' },
          description: 'Monthly (per seat)',
          name: 'Monthly (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
          unit_price_overrides: [{ unit_price: { amount: '5000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        quantity: 10,
      },
      {
        price: {
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          status: 'active',
          quantity: { maximum: 100, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          unit_price: { amount: '10000', currency_code: 'USD' },
          description: 'Monthly (recurring addon)',
          name: 'Monthly (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
          unit_price_overrides: [{ unit_price: { amount: '20000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        quantity: 1,
      },
    ],
    origin: 'subscription_recurring',
    status: 'past_due',
    details: {
      totals: {
        fee: null,
        tax: '3549',
        total: '43549',
        credit: '0',
        credit_to_balance: '0',
        balance: '43549',
        discount: '0',
        earnings: null,
        subtotal: '40000',
        grand_total: '43549',
        currency_code: 'USD',
      },
      line_items: [
        {
          id: 'txnitm_01h8e2sw1tnpykpxvc9f231w0t',
          totals: { tax: '2662', total: '32662', discount: '0', subtotal: '30000' },
          product: {
            id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
            name: 'ChatApp Pro',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
            description:
              "Everything in basic, plus access to a suite of powerful tools and features designed to take your team's productivity to the next level.",
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          quantity: 10,
          tax_rate: '0.08875',
          unit_totals: { tax: '266', total: '3266', discount: '0', subtotal: '3000' },
        },
        {
          id: 'txnitm_01h8e2sw1tnpykpxvc9frtchfj',
          totals: { tax: '887', total: '10887', discount: '0', subtotal: '10000' },
          product: {
            id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
            name: 'Voice rooms addon',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/GcZzBjXRfiraensppgtQ_icon2.png',
            description:
              'Create voice rooms in your chats to work in real time alongside your colleagues. Includes unlimited voice rooms and recording backup for compliance.',
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          quantity: 1,
          tax_rate: '0.08875',
          unit_totals: { tax: '887', total: '10887', discount: '0', subtotal: '10000' },
        },
      ],
      payout_totals: null,
      tax_rates_used: [
        { totals: { tax: '3549', total: '43549', discount: '0', subtotal: '40000' }, tax_rate: '0.08875' },
      ],
      adjusted_totals: {
        fee: null,
        tax: '3549',
        total: '43549',
        earnings: null,
        subtotal: '40000',
        grand_total: '43549',
        currency_code: 'USD',
      },
      adjusted_payout_totals: null,
    },
    checkout: {
      url: 'https://magnificent-entremet-7ae0c6.netlify.app/default/overlay?_ptxn=txn_01h8e2svn94ze7bfj0zfh7z6wm',
    },
    payments: [
      {
        amount: '43549',
        status: 'error',
        created_at: '2023-08-22T07:37:01.90043Z',
        error_code: 'authentication_failed',
        captured_at: null,
        method_details: {
          card: { type: 'visa', last4: '3184', expiry_year: 2025, expiry_month: 1, cardholder_name: 'Jo Williams' },
          type: 'card',
        },
        payment_attempt_id: 'b9032892-96e8-4658-a822-c8177c94147e',
        stored_payment_method_id: '37bb3dd6-aba6-4eb4-8bf0-e1079a3df543',
      },
    ],
    billed_at: '2023-08-22T07:37:01.353611Z',
    address_id: 'add_01h8e18bzb5av13cd16m5gz214',
    created_at: '2023-08-22T07:37:01.767524Z',
    invoice_id: null,
    updated_at: '2023-08-22T07:37:04.308718968Z',
    business_id: null,
    custom_data: null,
    customer_id: 'ctm_01h8e18bxp9hby49dnm8ewf0m0',
    discount_id: null,
    currency_code: 'USD',
    billing_period: { ends_at: '2023-10-22T07:15:43.792797Z', starts_at: '2023-09-22T07:15:43.792797Z' },
    invoice_number: null,
    billing_details: null,
    collection_mode: 'automatic',
    subscription_id: 'sub_01h8e1jxhhss1a6agahb2xh9j0',
  },
};

export const TransactionPastDueMockExpectation = {
  data: {
    addressId: 'add_01h8e18bzb5av13cd16m5gz214',
    billedAt: '2023-08-22T07:37:01.353611Z',
    billingDetails: null,
    billingPeriod: {
      endsAt: '2023-10-22T07:15:43.792797Z',
      startsAt: '2023-09-22T07:15:43.792797Z',
    },
    businessId: null,
    checkout: {
      url: 'https://magnificent-entremet-7ae0c6.netlify.app/default/overlay?_ptxn=txn_01h8e2svn94ze7bfj0zfh7z6wm',
    },
    collectionMode: 'automatic',
    createdAt: '2023-08-22T07:37:01.767524Z',
    currencyCode: 'USD',
    customData: null,
    customerId: 'ctm_01h8e18bxp9hby49dnm8ewf0m0',
    details: {
      adjustedPayoutTotals: null,
      adjustedTotals: {
        currencyCode: 'USD',
        earnings: null,
        fee: null,
        grandTotal: '43549',
        subtotal: '40000',
        tax: '3549',
        total: '43549',
      },
      lineItems: [
        {
          id: 'txnitm_01h8e2sw1tnpykpxvc9f231w0t',
          priceId: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              "Everything in basic, plus access to a suite of powerful tools and features designed to take your team's productivity to the next level.",
            id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
            importMeta: null,
            name: 'ChatApp Pro',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 10,
          taxRate: '0.08875',
          totals: {
            discount: '0',
            subtotal: '30000',
            tax: '2662',
            total: '32662',
          },
          unitTotals: {
            discount: '0',
            subtotal: '3000',
            tax: '266',
            total: '3266',
          },
        },
        {
          id: 'txnitm_01h8e2sw1tnpykpxvc9frtchfj',
          priceId: 'pri_01h1vjfevh5etwq3rb416a23h2',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'Create voice rooms in your chats to work in real time alongside your colleagues. Includes unlimited voice rooms and recording backup for compliance.',
            id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/GcZzBjXRfiraensppgtQ_icon2.png',
            importMeta: null,
            name: 'Voice rooms addon',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 1,
          taxRate: '0.08875',
          totals: {
            discount: '0',
            subtotal: '10000',
            tax: '887',
            total: '10887',
          },
          unitTotals: {
            discount: '0',
            subtotal: '10000',
            tax: '887',
            total: '10887',
          },
        },
      ],
      payoutTotals: null,
      taxRatesUsed: [
        {
          taxRate: '0.08875',
          totals: {
            discount: '0',
            subtotal: '40000',
            tax: '3549',
            total: '43549',
          },
        },
      ],
      totals: {
        balance: '43549',
        credit: '0',
        creditToBalance: '0',
        currencyCode: 'USD',
        discount: '0',
        earnings: null,
        fee: null,
        grandTotal: '43549',
        subtotal: '40000',
        tax: '3549',
        total: '43549',
      },
    },
    discountId: null,
    id: 'txn_01h8e2svn94ze7bfj0zfh7z6wm',
    invoiceId: null,
    invoiceNumber: null,
    items: [
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          createdAt: null,
          customData: null,
          description: 'Monthly (per seat)',
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          importMeta: null,
          name: 'Monthly (per seat)',
          productId: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          quantity: {
            maximum: 999,
            minimum: 10,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '3000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '5000',
                currencyCode: 'AUD',
              },
            },
          ],
          updatedAt: null,
        },
        proration: null,
        quantity: 10,
      },
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          createdAt: null,
          customData: null,
          description: 'Monthly (recurring addon)',
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          importMeta: null,
          name: 'Monthly (recurring addon)',
          productId: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '10000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '20000',
                currencyCode: 'AUD',
              },
            },
          ],
          updatedAt: null,
        },
        proration: null,
        quantity: 1,
      },
    ],
    origin: 'subscription_recurring',
    payments: [
      {
        amount: '43549',
        capturedAt: null,
        createdAt: '2023-08-22T07:37:01.90043Z',
        errorCode: 'authentication_failed',
        methodDetails: {
          card: {
            cardholderName: 'Jo Williams',
            expiryMonth: 1,
            expiryYear: 2025,
            last4: '3184',
            type: 'visa',
          },
          type: 'card',
        },
        paymentAttemptId: 'b9032892-96e8-4658-a822-c8177c94147e',
        paymentMethodId: null,
        status: 'error',
        storedPaymentMethodId: '37bb3dd6-aba6-4eb4-8bf0-e1079a3df543',
      },
    ],
    status: 'past_due',
    subscriptionId: 'sub_01h8e1jxhhss1a6agahb2xh9j0',
    updatedAt: '2023-08-22T07:37:04.308718968Z',
  },
  eventId: 'evt_01h8e2sys80rn6y8xz31mstgt9',
  eventType: 'transaction.past_due',
  notificationId: 'ntf_01h8e2syvt2n0sk9m8csp27k5q',
  occurredAt: '2023-08-22T07:37:04.552638Z',
};
