/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";
import { BookingPaymentSourceBankAccountAccountType } from "./BookingPaymentSourceBankAccountAccountType";

export const BookingPaymentSourceBankAccount: core.serialization.ObjectSchema<
    serializers.BookingPaymentSourceBankAccount.Raw,
    ButtonclikrApi.BookingPaymentSourceBankAccount
> = core.serialization.object({
    name: core.serialization.string(),
    number: core.serialization.string(),
    sortCode: core.serialization.property("sort_code", core.serialization.string().optional()),
    accountType: core.serialization.property("account_type", BookingPaymentSourceBankAccountAccountType),
    bankName: core.serialization.property("bank_name", core.serialization.string()),
    country: core.serialization.string(),
});

export declare namespace BookingPaymentSourceBankAccount {
    interface Raw {
        name: string;
        number: string;
        sort_code?: string | null;
        account_type: BookingPaymentSourceBankAccountAccountType.Raw;
        bank_name: string;
        country: string;
    }
}