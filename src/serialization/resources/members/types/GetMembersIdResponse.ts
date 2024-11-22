/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMembersIdResponseResponse } from "./GetMembersIdResponseResponse";
import { GetMembersIdResponseDetails } from "./GetMembersIdResponseDetails";

export const GetMembersIdResponse: core.serialization.ObjectSchema<
    serializers.GetMembersIdResponse.Raw,
    ButtonclikrApi.GetMembersIdResponse
> = core.serialization.object({
    response: GetMembersIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetMembersIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetMembersIdResponse {
    interface Raw {
        response?: GetMembersIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetMembersIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
