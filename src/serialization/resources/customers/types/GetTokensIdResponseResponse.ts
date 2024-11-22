/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTokensIdResponseResponseDetails } from "./GetTokensIdResponseResponseDetails";

export const GetTokensIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetTokensIdResponseResponse.Raw,
    ButtonclikrApi.GetTokensIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetTokensIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetTokensIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetTokensIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
