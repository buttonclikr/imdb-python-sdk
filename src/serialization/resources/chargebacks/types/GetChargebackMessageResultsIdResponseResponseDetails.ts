/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessageResultsIdResponseResponseDetailsPage } from "./GetChargebackMessageResultsIdResponseResponseDetailsPage";

export const GetChargebackMessageResultsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackMessageResultsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetChargebackMessageResultsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackMessageResultsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetChargebackMessageResultsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackMessageResultsIdResponseResponseDetailsPage.Raw | null;
    }
}