/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ITransactionNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const TransactionUpdatedMock: IEventsResponse<ITransactionNotificationResponse> = {
  event_id: 'evt_01h8e43a7vf4qxy0waredf267h',
  event_type: 'transaction.updated',
  occurred_at: '2023-08-22T07:59:39.771451Z',
  notification_id: 'ntf_01h8e43aac931gw6d52vhw0bam',
  data: {
    id: 'txn_01h8e3zqj6ychnn5s5sd2nd5py',
    items: [
      {
        price: {
          id: 'pri_01gsz91wy9k1yn7kx82aafwvea',
          status: 'active',
          quantity: { maximum: 100, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4vmqbjk3x4vvtafffd540',
          unit_price: { amount: '50000', currency_code: 'USD' },
          description: 'Annual (per seat)',
          name: 'Annual (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'year', frequency: 1 },
          unit_price_overrides: [],
          custom_data: null,
        },
        quantity: 50,
      },
      {
        price: {
          id: 'pri_01gsz96z29d88jrmsf2ztbfgjg',
          status: 'active',
          quantity: { maximum: 1, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
          unit_price: { amount: '300000', currency_code: 'USD' },
          description: 'Annual (recurring addon)',
          name: 'Annual (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'year', frequency: 1 },
          unit_price_overrides: [],
          type: 'standard',
          custom_data: null,
        },
        quantity: 1,
      },
      {
        price: {
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          status: 'active',
          quantity: { maximum: 1, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          unit_price: { amount: '19900', currency_code: 'USD' },
          description: 'One-time charge',
          name: 'One-time charge',
          trial_period: null,
          billing_cycle: null,
          unit_price_overrides: [{ unit_price: { amount: '40000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        quantity: 1,
      },
    ],
    origin: 'api',
    status: 'ready',
    details: {
      totals: {
        fee: null,
        tax: '250266',
        total: '3070166',
        credit: '0',
        credit_to_balance: '0',
        balance: '3070166',
        discount: '0',
        earnings: null,
        subtotal: '2819900',
        grand_total: '3070166',
        currency_code: 'USD',
      },
      line_items: [
        {
          id: 'txnitm_01h8e439xwzdpnx3gat6he0krp',
          totals: { tax: '221875', total: '2721875', discount: '0', subtotal: '2500000' },
          product: {
            id: 'pro_01gsz4vmqbjk3x4vvtafffd540',
            name: 'ChatApp Enterprise',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
            description:
              'The ultimate solution for businesses that require top-of-the-line features and customizations. Includes all the features of the Pro plan, plus personalized onboarding, dedicated account management, and the ability to pay via invoice.',
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01gsz91wy9k1yn7kx82aafwvea',
          quantity: 50,
          tax_rate: '0.08875',
          unit_totals: { tax: '4437', total: '54437', discount: '0', subtotal: '50000' },
        },
        {
          id: 'txnitm_01h8e439xwzdpnx3gat7mw4kh1',
          totals: { tax: '26625', total: '326625', discount: '0', subtotal: '300000' },
          product: {
            id: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
            name: 'VIP support',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            description:
              'Get exclusive access to our expert team of product specialists, available to help you make the most of your ChatApp subscription.',
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01gsz96z29d88jrmsf2ztbfgjg',
          quantity: 1,
          tax_rate: '0.08875',
          unit_totals: { tax: '26625', total: '326625', discount: '0', subtotal: '300000' },
        },
        {
          id: 'txnitm_01h8e439xwzdpnx3gatakyaabq',
          totals: { tax: '1766', total: '21666', discount: '0', subtotal: '19900' },
          product: {
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            name: 'Custom domains',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            description:
              'Make ChatApp truly your own with custom domains! Custom domains reinforce your brand identity and make it easy for your team to access ChatApp.',
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          quantity: 1,
          tax_rate: '0.08875',
          unit_totals: { tax: '1766', total: '21666', discount: '0', subtotal: '19900' },
        },
      ],
      payout_totals: null,
      tax_rates_used: [
        { totals: { tax: '250266', total: '3070166', discount: '0', subtotal: '2819900' }, tax_rate: '0.08875' },
      ],
      adjusted_totals: {
        fee: null,
        tax: '250266',
        total: '3070166',
        earnings: null,
        subtotal: '2819900',
        grand_total: '3070166',
        currency_code: 'USD',
      },
      adjusted_payout_totals: null,
    },
    checkout: { url: null },
    payments: [],
    billed_at: null,
    address_id: 'add_01h848pep46enq8y372x7maj0p',
    created_at: '2023-08-22T07:57:42.866909Z',
    invoice_id: 'inv_01h8e3zs2dkmq46xtpn18wvzd9',
    updated_at: '2023-08-22T07:59:39.476640535Z',
    business_id: null,
    custom_data: null,
    customer_id: 'ctm_01h8441jn5pcwrfhwh78jqt8hk',
    discount_id: null,
    currency_code: 'USD',
    billing_period: { ends_at: '2024-07-31T23:59:00Z', starts_at: '2023-08-01T00:00:00Z' },
    invoice_number: null,
    billing_details: {
      payment_terms: { interval: 'day', frequency: 14 },
      enable_checkout: false,
      purchase_order_number: 'PO-123',
      additional_information: null,
    },
    collection_mode: 'manual',
    subscription_id: null,
  },
};

export const TransactionUpdatedMockExpectation = {
  data: {
    addressId: 'add_01h848pep46enq8y372x7maj0p',
    billedAt: null,
    billingDetails: {
      additionalInformation: null,
      enableCheckout: false,
      paymentTerms: {
        frequency: 14,
        interval: 'day',
      },
      purchaseOrderNumber: 'PO-123',
    },
    billingPeriod: {
      endsAt: '2024-07-31T23:59:00Z',
      startsAt: '2023-08-01T00:00:00Z',
    },
    businessId: null,
    checkout: {
      url: null,
    },
    collectionMode: 'manual',
    createdAt: '2023-08-22T07:57:42.866909Z',
    currencyCode: 'USD',
    customData: null,
    customerId: 'ctm_01h8441jn5pcwrfhwh78jqt8hk',
    details: {
      adjustedPayoutTotals: null,
      adjustedTotals: {
        currencyCode: 'USD',
        earnings: null,
        fee: null,
        grandTotal: '3070166',
        subtotal: '2819900',
        tax: '250266',
        total: '3070166',
      },
      lineItems: [
        {
          id: 'txnitm_01h8e439xwzdpnx3gat6he0krp',
          priceId: 'pri_01gsz91wy9k1yn7kx82aafwvea',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'The ultimate solution for businesses that require top-of-the-line features and customizations. Includes all the features of the Pro plan, plus personalized onboarding, dedicated account management, and the ability to pay via invoice.',
            id: 'pro_01gsz4vmqbjk3x4vvtafffd540',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
            importMeta: null,
            name: 'ChatApp Enterprise',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 50,
          taxRate: '0.08875',
          totals: {
            discount: '0',
            subtotal: '2500000',
            tax: '221875',
            total: '2721875',
          },
          unitTotals: {
            discount: '0',
            subtotal: '50000',
            tax: '4437',
            total: '54437',
          },
        },
        {
          id: 'txnitm_01h8e439xwzdpnx3gat7mw4kh1',
          priceId: 'pri_01gsz96z29d88jrmsf2ztbfgjg',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'Get exclusive access to our expert team of product specialists, available to help you make the most of your ChatApp subscription.',
            id: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            importMeta: null,
            name: 'VIP support',
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
            subtotal: '300000',
            tax: '26625',
            total: '326625',
          },
          unitTotals: {
            discount: '0',
            subtotal: '300000',
            tax: '26625',
            total: '326625',
          },
        },
        {
          id: 'txnitm_01h8e439xwzdpnx3gatakyaabq',
          priceId: 'pri_01gsz98e27ak2tyhexptwc58yk',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'Make ChatApp truly your own with custom domains! Custom domains reinforce your brand identity and make it easy for your team to access ChatApp.',
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            importMeta: null,
            name: 'Custom domains',
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
            subtotal: '19900',
            tax: '1766',
            total: '21666',
          },
          unitTotals: {
            discount: '0',
            subtotal: '19900',
            tax: '1766',
            total: '21666',
          },
        },
      ],
      payoutTotals: null,
      taxRatesUsed: [
        {
          taxRate: '0.08875',
          totals: {
            discount: '0',
            subtotal: '2819900',
            tax: '250266',
            total: '3070166',
          },
        },
      ],
      totals: {
        balance: '3070166',
        credit: '0',
        creditToBalance: '0',
        currencyCode: 'USD',
        discount: '0',
        earnings: null,
        fee: null,
        grandTotal: '3070166',
        subtotal: '2819900',
        tax: '250266',
        total: '3070166',
      },
    },
    discountId: null,
    id: 'txn_01h8e3zqj6ychnn5s5sd2nd5py',
    invoiceId: 'inv_01h8e3zs2dkmq46xtpn18wvzd9',
    invoiceNumber: null,
    items: [
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'year',
          },
          createdAt: null,
          customData: null,
          description: 'Annual (per seat)',
          id: 'pri_01gsz91wy9k1yn7kx82aafwvea',
          importMeta: null,
          name: 'Annual (per seat)',
          productId: 'pro_01gsz4vmqbjk3x4vvtafffd540',
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: null,
          unitPrice: {
            amount: '50000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [],
          updatedAt: null,
        },
        proration: null,
        quantity: 50,
      },
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'year',
          },
          createdAt: null,
          customData: null,
          description: 'Annual (recurring addon)',
          id: 'pri_01gsz96z29d88jrmsf2ztbfgjg',
          importMeta: null,
          name: 'Annual (recurring addon)',
          productId: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
          quantity: {
            maximum: 1,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '300000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [],
          updatedAt: null,
        },
        proration: null,
        quantity: 1,
      },
      {
        price: {
          billingCycle: null,
          createdAt: null,
          customData: null,
          description: 'One-time charge',
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          importMeta: null,
          name: 'One-time charge',
          productId: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          quantity: {
            maximum: 1,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '19900',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '40000',
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
    origin: 'api',
    payments: [],
    status: 'ready',
    subscriptionId: null,
    updatedAt: '2023-08-22T07:59:39.476640535Z',
  },
  eventId: 'evt_01h8e43a7vf4qxy0waredf267h',
  eventType: 'transaction.updated',
  notificationId: 'ntf_01h8e43aac931gw6d52vhw0bam',
  occurredAt: '2023-08-22T07:59:39.771451Z',
};
