/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetIplistsIdResponseResponseDetails } from "./GetIplistsIdResponseResponseDetails";

export const GetIplistsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetIplistsIdResponseResponse.Raw,
    ButtonclikrApi.GetIplistsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetIplistsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetIplistsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetIplistsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}