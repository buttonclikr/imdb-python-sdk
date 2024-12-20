/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

/**
 * A bank account to take payment from. Must be able to make payments in the currency specified in the payment.
 */
export interface BookingPaymentSourceBankAccount {
    name: string;
    /** The account number for the bank account, in string form. Must be a current account. */
    number: string;
    /** The sort code for the bank account, in string form. Must be a six-digit number. */
    sortCode?: string;
    /** The type of entity that holds the account. This can be either `individual` or `company`. */
    accountType: ButtonclikrApi.BookingPaymentSourceBankAccountAccountType;
    /** The name of the bank associated with the routing number. */
    bankName: string;
    /** Two-letter country code (ISO 3166-1 alpha-2). */
    country: string;
}
