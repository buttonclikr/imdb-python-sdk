/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAggregationResultsResponseDetailsPage } from "./GetAggregationResultsResponseDetailsPage";

export const GetAggregationResultsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetAggregationResultsResponseDetails.Raw,
    ButtonclikrApi.GetAggregationResultsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetAggregationResultsResponseDetailsPage.optional(),
});

export declare namespace GetAggregationResultsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetAggregationResultsResponseDetailsPage.Raw | null;
    }
}
