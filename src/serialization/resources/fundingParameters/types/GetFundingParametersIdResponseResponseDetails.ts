/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFundingParametersIdResponseResponseDetailsPage } from "./GetFundingParametersIdResponseResponseDetailsPage";

export const GetFundingParametersIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFundingParametersIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetFundingParametersIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFundingParametersIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetFundingParametersIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFundingParametersIdResponseResponseDetailsPage.Raw | null;
    }
}