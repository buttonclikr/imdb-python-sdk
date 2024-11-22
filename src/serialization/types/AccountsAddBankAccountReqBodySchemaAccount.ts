/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";
import { AccountsAddBankAccountReqBodySchemaAccountMethod } from "./AccountsAddBankAccountReqBodySchemaAccountMethod";

export const AccountsAddBankAccountReqBodySchemaAccount: core.serialization.ObjectSchema<
    serializers.AccountsAddBankAccountReqBodySchemaAccount.Raw,
    ButtonclikrApi.AccountsAddBankAccountReqBodySchemaAccount
> = core.serialization.object({
    method: AccountsAddBankAccountReqBodySchemaAccountMethod,
    number: core.serialization.unknown(),
    routing: core.serialization.unknown().optional(),
});

export declare namespace AccountsAddBankAccountReqBodySchemaAccount {
    interface Raw {
        method: AccountsAddBankAccountReqBodySchemaAccountMethod.Raw;
        number?: unknown;
        routing?: unknown | null;
    }
}