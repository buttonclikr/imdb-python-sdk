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
import { DisbursementResultsModelCode } from "./DisbursementResultsModelCode";
import { DisbursementResultsModelPlatform } from "./DisbursementResultsModelPlatform";
import { Frozen } from "./Frozen";
import { Inactive } from "./Inactive";

export const DisbursementResultsModel: core.serialization.ObjectSchema<
    serializers.DisbursementResultsModel.Raw,
    ButtonclikrApi.DisbursementResultsModel
> = core.serialization.object({
    id: Id.optional(),
    created: Created.optional(),
    modified: Modified.optional(),
    creator: Creator.optional(),
    modifier: Modifier.optional(),
    disbursement: core.serialization.string().optional(),
    disbursementRef: core.serialization.string().optional(),
    code: DisbursementResultsModelCode.optional(),
    originalCode: core.serialization.string().optional(),
    platform: DisbursementResultsModelPlatform.optional(),
    message: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    data: core.serialization.string().optional(),
    frozen: Frozen.optional(),
    inactive: Inactive.optional(),
});

export declare namespace DisbursementResultsModel {
    interface Raw {
        id?: Id.Raw | null;
        created?: Created.Raw | null;
        modified?: Modified.Raw | null;
        creator?: Creator.Raw | null;
        modifier?: Modifier.Raw | null;
        disbursement?: string | null;
        disbursementRef?: string | null;
        code?: DisbursementResultsModelCode.Raw | null;
        originalCode?: string | null;
        platform?: DisbursementResultsModelPlatform.Raw | null;
        message?: string | null;
        amount?: number | null;
        data?: string | null;
        frozen?: Frozen.Raw | null;
        inactive?: Inactive.Raw | null;
    }
}