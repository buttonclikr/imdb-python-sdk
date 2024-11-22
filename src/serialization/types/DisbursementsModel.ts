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
import { DisbursementsModelFundingStatus } from "./DisbursementsModelFundingStatus";
import { DisbursementsModelDisbursementEntriesStatus } from "./DisbursementsModelDisbursementEntriesStatus";
import { DisbursementsModelCurrency } from "./DisbursementsModelCurrency";
import { DisbursementsModelPlatform } from "./DisbursementsModelPlatform";
import { Frozen } from "./Frozen";
import { Inactive } from "./Inactive";

export const DisbursementsModel: core.serialization.ObjectSchema<
    serializers.DisbursementsModel.Raw,
    ButtonclikrApi.DisbursementsModel
> = core.serialization.object({
    id: Id.optional(),
    created: Created.optional(),
    modified: Modified.optional(),
    creator: Creator.optional(),
    modifier: Modifier.optional(),
    entity: core.serialization.string().optional(),
    account: core.serialization.string().optional(),
    payment: core.serialization.string().optional(),
    payout: core.serialization.string().optional(),
    settlement: core.serialization.string().optional(),
    statement: core.serialization.string().optional(),
    funding: core.serialization.string().optional(),
    originalDisbursement: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    secondaryDescriptor: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    approvedAmount: core.serialization.number().optional(),
    returnedAmount: core.serialization.number().optional(),
    status: core.serialization.number().optional(),
    fundingStatus: DisbursementsModelFundingStatus.optional(),
    processed: core.serialization.date().optional(),
    deletedDisbursementEntries: core.serialization.number().optional(),
    disbursementEntriesStatus: DisbursementsModelDisbursementEntriesStatus.optional(),
    lastNegativeEntry: core.serialization.string().optional(),
    lastNegativePendingEntry: core.serialization.string().optional(),
    lastPositiveReserveEntry: core.serialization.string().optional(),
    lastPositiveEntry: core.serialization.string().optional(),
    lastPositivePendingEntry: core.serialization.string().optional(),
    lastNegativeReserveEntry: core.serialization.string().optional(),
    currency: DisbursementsModelCurrency.optional(),
    expiration: core.serialization.string().optional(),
    platform: DisbursementsModelPlatform.optional(),
    sameDay: core.serialization.number().optional(),
    frozen: Frozen.optional(),
    inactive: Inactive.optional(),
});

export declare namespace DisbursementsModel {
    interface Raw {
        id?: Id.Raw | null;
        created?: Created.Raw | null;
        modified?: Modified.Raw | null;
        creator?: Creator.Raw | null;
        modifier?: Modifier.Raw | null;
        entity?: string | null;
        account?: string | null;
        payment?: string | null;
        payout?: string | null;
        settlement?: string | null;
        statement?: string | null;
        funding?: string | null;
        originalDisbursement?: string | null;
        description?: string | null;
        secondaryDescriptor?: string | null;
        amount?: number | null;
        approvedAmount?: number | null;
        returnedAmount?: number | null;
        status?: number | null;
        fundingStatus?: DisbursementsModelFundingStatus.Raw | null;
        processed?: string | null;
        deletedDisbursementEntries?: number | null;
        disbursementEntriesStatus?: DisbursementsModelDisbursementEntriesStatus.Raw | null;
        lastNegativeEntry?: string | null;
        lastNegativePendingEntry?: string | null;
        lastPositiveReserveEntry?: string | null;
        lastPositiveEntry?: string | null;
        lastPositivePendingEntry?: string | null;
        lastNegativeReserveEntry?: string | null;
        currency?: DisbursementsModelCurrency.Raw | null;
        expiration?: string | null;
        platform?: DisbursementsModelPlatform.Raw | null;
        sameDay?: number | null;
        frozen?: Frozen.Raw | null;
        inactive?: Inactive.Raw | null;
    }
}
