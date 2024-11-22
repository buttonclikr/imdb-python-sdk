/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAggregationsResponseResponse } from "./GetAggregationsResponseResponse";
import { GetAggregationsResponseDetails } from "./GetAggregationsResponseDetails";

export const GetAggregationsResponse: core.serialization.ObjectSchema<
    serializers.GetAggregationsResponse.Raw,
    ButtonclikrApi.GetAggregationsResponse
> = core.serialization.object({
    response: GetAggregationsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetAggregationsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAggregationsResponse {
    interface Raw {
        response?: GetAggregationsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetAggregationsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}