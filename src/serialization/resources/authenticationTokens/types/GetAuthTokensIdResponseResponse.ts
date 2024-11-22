/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAuthTokensIdResponseResponseDetails } from "./GetAuthTokensIdResponseResponseDetails";

export const GetAuthTokensIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetAuthTokensIdResponseResponse.Raw,
    ButtonclikrApi.GetAuthTokensIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetAuthTokensIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAuthTokensIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetAuthTokensIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
