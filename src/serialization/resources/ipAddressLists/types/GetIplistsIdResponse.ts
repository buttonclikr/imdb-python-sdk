/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetIplistsIdResponseResponse } from "./GetIplistsIdResponseResponse";
import { GetIplistsIdResponseDetails } from "./GetIplistsIdResponseDetails";

export const GetIplistsIdResponse: core.serialization.ObjectSchema<
    serializers.GetIplistsIdResponse.Raw,
    ButtonclikrApi.GetIplistsIdResponse
> = core.serialization.object({
    response: GetIplistsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetIplistsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetIplistsIdResponse {
    interface Raw {
        response?: GetIplistsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetIplistsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
