/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAlertsResponseResponse } from "./PostAlertsResponseResponse";
import { PostAlertsResponseDetails } from "./PostAlertsResponseDetails";

export const PostAlertsResponse: core.serialization.ObjectSchema<
    serializers.PostAlertsResponse.Raw,
    ButtonclikrApi.PostAlertsResponse
> = core.serialization.object({
    response: PostAlertsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostAlertsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostAlertsResponse {
    interface Raw {
        response?: PostAlertsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostAlertsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
