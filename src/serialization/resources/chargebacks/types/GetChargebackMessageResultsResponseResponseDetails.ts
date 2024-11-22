/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessageResultsResponseResponseDetailsPage } from "./GetChargebackMessageResultsResponseResponseDetailsPage";

export const GetChargebackMessageResultsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackMessageResultsResponseResponseDetails.Raw,
    ButtonclikrApi.GetChargebackMessageResultsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackMessageResultsResponseResponseDetailsPage.optional(),
});

export declare namespace GetChargebackMessageResultsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackMessageResultsResponseResponseDetailsPage.Raw | null;
    }
}