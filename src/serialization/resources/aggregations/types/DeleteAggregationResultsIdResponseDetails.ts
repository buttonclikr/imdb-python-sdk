/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteAggregationResultsIdResponseDetailsPage } from "./DeleteAggregationResultsIdResponseDetailsPage";

export const DeleteAggregationResultsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteAggregationResultsIdResponseDetails.Raw,
    ButtonclikrApi.DeleteAggregationResultsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteAggregationResultsIdResponseDetailsPage.optional(),
});

export declare namespace DeleteAggregationResultsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteAggregationResultsIdResponseDetailsPage.Raw | null;
    }
}