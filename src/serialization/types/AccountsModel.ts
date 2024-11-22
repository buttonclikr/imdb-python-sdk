/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";
import { Id } from "./Id";
import { Created } from "./Created";
import { Modified } from "./Modified";
import { Creator } from "./Creator";
import { Modifier } from "./Modifier";
import { AccountsModelType } from "./AccountsModelType";
import { Inactive } from "./Inactive";
import { AccountsModelCurrency } from "./AccountsModelCurrency";
import { Frozen } from "./Frozen";

export const AccountsModel: core.serialization.ObjectSchema<
    serializers.AccountsModel.Raw,
    ButtonclikrApi.AccountsModel
> = core.serialization.object({
    id: Id.optional(),
    created: Created.optional(),
    modified: Modified.optional(),
    creator: Creator.optional(),
    modifier: Modifier.optional(),
    entity: core.serialization.string().optional(),
    account: core.serialization.string().optional(),
    token: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    primary: core.serialization.number().optional(),
    type: AccountsModelType.optional(),
    status: core.serialization.number().optional(),
    reserved: core.serialization.number().optional(),
    checkStage: core.serialization.string().optional(),
    expiration: core.serialization.string().optional(),
    inactive: Inactive.optional(),
    currency: AccountsModelCurrency.optional(),
    frozen: Frozen.optional(),
    publicToken: core.serialization.string().optional(),
    mask: core.serialization.string().optional(),
});

export declare namespace AccountsModel {
    interface Raw {
        id?: Id.Raw | null;
        created?: Created.Raw | null;
        modified?: Modified.Raw | null;
        creator?: Creator.Raw | null;
        modifier?: Modifier.Raw | null;
        entity?: string | null;
        account?: string | null;
        token?: string | null;
        name?: string | null;
        description?: string | null;
        primary?: number | null;
        type?: AccountsModelType.Raw | null;
        status?: number | null;
        reserved?: number | null;
        checkStage?: string | null;
        expiration?: string | null;
        inactive?: Inactive.Raw | null;
        currency?: AccountsModelCurrency.Raw | null;
        frozen?: Frozen.Raw | null;
        publicToken?: string | null;
        mask?: string | null;
    }
}
