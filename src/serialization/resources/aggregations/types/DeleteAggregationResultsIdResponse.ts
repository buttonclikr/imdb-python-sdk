/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteAggregationResultsIdResponseResponse } from "./DeleteAggregationResultsIdResponseResponse";
import { DeleteAggregationResultsIdResponseDetails } from "./DeleteAggregationResultsIdResponseDetails";

export const DeleteAggregationResultsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteAggregationResultsIdResponse.Raw,
    ButtonclikrApi.DeleteAggregationResultsIdResponse
> = core.serialization.object({
    response: DeleteAggregationResultsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteAggregationResultsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteAggregationResultsIdResponse {
    interface Raw {
        response?: DeleteAggregationResultsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteAggregationResultsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
