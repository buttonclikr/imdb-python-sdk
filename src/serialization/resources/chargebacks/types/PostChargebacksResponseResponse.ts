/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostChargebacksResponseResponseDetails } from "./PostChargebacksResponseResponseDetails";

export const PostChargebacksResponseResponse: core.serialization.ObjectSchema<
    serializers.PostChargebacksResponseResponse.Raw,
    ButtonclikrApi.PostChargebacksResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostChargebacksResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostChargebacksResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostChargebacksResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
