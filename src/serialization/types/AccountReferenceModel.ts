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
import { AccountReferenceModelStage } from "./AccountReferenceModelStage";

export const AccountReferenceModel: core.serialization.ObjectSchema<
    serializers.AccountReferenceModel.Raw,
    ButtonclikrApi.AccountReferenceModel
> = core.serialization.object({
    id: Id.optional(),
    created: Created.optional(),
    modified: Modified.optional(),
    creator: Creator.optional(),
    modifier: Modifier.optional(),
    account: core.serialization.string().optional(),
    ref: core.serialization.string().optional(),
    stage: AccountReferenceModelStage.optional(),
    platform: core.serialization.stringLiteral("PLAID").optional(),
});

export declare namespace AccountReferenceModel {
    interface Raw {
        id?: Id.Raw | null;
        created?: Created.Raw | null;
        modified?: Modified.Raw | null;
        creator?: Creator.Raw | null;
        modifier?: Modifier.Raw | null;
        account?: string | null;
        ref?: string | null;
        stage?: AccountReferenceModelStage.Raw | null;
        platform?: "PLAID" | null;
    }
}