/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetVerificationRefsResponseResponse } from "./GetVerificationRefsResponseResponse";

export const GetVerificationRefsResponse: core.serialization.ObjectSchema<
    serializers.GetVerificationRefsResponse.Raw,
    ButtonclikrApi.GetVerificationRefsResponse
> = core.serialization.object({
    response: GetVerificationRefsResponseResponse.optional(),
});

export declare namespace GetVerificationRefsResponse {
    interface Raw {
        response?: GetVerificationRefsResponseResponse.Raw | null;
    }
}