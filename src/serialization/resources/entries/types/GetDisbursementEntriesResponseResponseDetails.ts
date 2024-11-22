/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDisbursementEntriesResponseResponseDetailsPage } from "./GetDisbursementEntriesResponseResponseDetailsPage";

export const GetDisbursementEntriesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetDisbursementEntriesResponseResponseDetails.Raw,
    ButtonclikrApi.GetDisbursementEntriesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetDisbursementEntriesResponseResponseDetailsPage.optional(),
});

export declare namespace GetDisbursementEntriesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetDisbursementEntriesResponseResponseDetailsPage.Raw | null;
    }
}