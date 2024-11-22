/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFundingParametersIdResponseResponseDetailsPage } from "./DeleteFundingParametersIdResponseResponseDetailsPage";

export const DeleteFundingParametersIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteFundingParametersIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteFundingParametersIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteFundingParametersIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteFundingParametersIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteFundingParametersIdResponseResponseDetailsPage.Raw | null;
    }
}
