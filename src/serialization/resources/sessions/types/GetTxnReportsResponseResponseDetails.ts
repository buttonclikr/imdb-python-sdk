/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTxnReportsResponseResponseDetailsPage } from "./GetTxnReportsResponseResponseDetailsPage";

export const GetTxnReportsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTxnReportsResponseResponseDetails.Raw,
    ButtonclikrApi.GetTxnReportsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTxnReportsResponseResponseDetailsPage.optional(),
});

export declare namespace GetTxnReportsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTxnReportsResponseResponseDetailsPage.Raw | null;
    }
}