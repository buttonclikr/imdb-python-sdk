/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutAggregationsIdResponseResponseDetails } from "./PutAggregationsIdResponseResponseDetails";

export const PutAggregationsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutAggregationsIdResponseResponse.Raw,
    ButtonclikrApi.PutAggregationsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutAggregationsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutAggregationsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutAggregationsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
