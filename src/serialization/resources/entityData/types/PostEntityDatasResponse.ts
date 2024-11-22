/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostEntityDatasResponseResponse } from "./PostEntityDatasResponseResponse";
import { PostEntityDatasResponseDetails } from "./PostEntityDatasResponseDetails";

export const PostEntityDatasResponse: core.serialization.ObjectSchema<
    serializers.PostEntityDatasResponse.Raw,
    ButtonclikrApi.PostEntityDatasResponse
> = core.serialization.object({
    response: PostEntityDatasResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostEntityDatasResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostEntityDatasResponse {
    interface Raw {
        response?: PostEntityDatasResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostEntityDatasResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
