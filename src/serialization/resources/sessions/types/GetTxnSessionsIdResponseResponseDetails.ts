/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTxnSessionsIdResponseResponseDetailsPage } from "./GetTxnSessionsIdResponseResponseDetailsPage";

export const GetTxnSessionsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTxnSessionsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetTxnSessionsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTxnSessionsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetTxnSessionsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTxnSessionsIdResponseResponseDetailsPage.Raw | null;
    }
}
