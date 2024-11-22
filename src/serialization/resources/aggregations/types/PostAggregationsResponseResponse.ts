/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAggregationsResponseResponseDetails } from "./PostAggregationsResponseResponseDetails";

export const PostAggregationsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostAggregationsResponseResponse.Raw,
    ButtonclikrApi.PostAggregationsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostAggregationsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostAggregationsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostAggregationsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}