/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostBillingsResponseResponse } from "./PostBillingsResponseResponse";
import { PostBillingsResponseDetails } from "./PostBillingsResponseDetails";

export const PostBillingsResponse: core.serialization.ObjectSchema<
    serializers.PostBillingsResponse.Raw,
    ButtonclikrApi.PostBillingsResponse
> = core.serialization.object({
    response: PostBillingsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostBillingsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostBillingsResponse {
    interface Raw {
        response?: PostBillingsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostBillingsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
