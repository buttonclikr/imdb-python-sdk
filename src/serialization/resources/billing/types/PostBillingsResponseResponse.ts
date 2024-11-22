/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostBillingsResponseResponseDetails } from "./PostBillingsResponseResponseDetails";

export const PostBillingsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostBillingsResponseResponse.Raw,
    ButtonclikrApi.PostBillingsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostBillingsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostBillingsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostBillingsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
