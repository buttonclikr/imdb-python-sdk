/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccountsAddBankAccountReqBodyAccount } from "../../types/AccountsAddBankAccountReqBodyAccount";
import { AccountsAddBankAccountReqBodyType } from "../../types/AccountsAddBankAccountReqBodyType";
import { AccountsAddBankAccountReqBodyCurrency } from "../../types/AccountsAddBankAccountReqBodyCurrency";
import { Inactive } from "../../../../types/Inactive";
import { Frozen } from "../../../../types/Frozen";

export const AccountsAddBankAccountReqBody: core.serialization.Schema<
    serializers.AccountsAddBankAccountReqBody.Raw,
    ButtonclikrApi.AccountsAddBankAccountReqBody
> = core.serialization.object({
    entity: core.serialization.string(),
    account: AccountsAddBankAccountReqBodyAccount,
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    primary: core.serialization.number(),
    type: AccountsAddBankAccountReqBodyType,
    status: core.serialization.number(),
    reserved: core.serialization.number(),
    checkStage: core.serialization.stringLiteral("createAccount").optional(),
    currency: AccountsAddBankAccountReqBodyCurrency,
    expiration: core.serialization.number().optional(),
    mask: core.serialization.string().optional(),
    inactive: Inactive,
    frozen: Frozen,
});

export declare namespace AccountsAddBankAccountReqBody {
    interface Raw {
        entity: string;
        account: AccountsAddBankAccountReqBodyAccount.Raw;
        name?: string | null;
        description?: string | null;
        primary: number;
        type: AccountsAddBankAccountReqBodyType.Raw;
        status: number;
        reserved: number;
        checkStage?: "createAccount" | null;
        currency: AccountsAddBankAccountReqBodyCurrency.Raw;
        expiration?: number | null;
        mask?: string | null;
        inactive: Inactive.Raw;
        frozen: Frozen.Raw;
    }
}