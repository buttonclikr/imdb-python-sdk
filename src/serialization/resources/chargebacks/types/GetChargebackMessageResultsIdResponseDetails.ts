/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessageResultsIdResponseDetailsPage } from "./GetChargebackMessageResultsIdResponseDetailsPage";

export const GetChargebackMessageResultsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackMessageResultsIdResponseDetails.Raw,
    ButtonclikrApi.GetChargebackMessageResultsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackMessageResultsIdResponseDetailsPage.optional(),
});

export declare namespace GetChargebackMessageResultsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackMessageResultsIdResponseDetailsPage.Raw | null;
    }
}
