/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMerchantResultsResponseResponseDetailsPage } from "./GetMerchantResultsResponseResponseDetailsPage";

export const GetMerchantResultsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMerchantResultsResponseResponseDetails.Raw,
    ButtonclikrApi.GetMerchantResultsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMerchantResultsResponseResponseDetailsPage.optional(),
});

export declare namespace GetMerchantResultsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMerchantResultsResponseResponseDetailsPage.Raw | null;
    }
}