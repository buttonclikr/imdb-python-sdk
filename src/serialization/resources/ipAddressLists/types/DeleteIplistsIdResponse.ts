/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteIplistsIdResponseResponse } from "./DeleteIplistsIdResponseResponse";
import { DeleteIplistsIdResponseDetails } from "./DeleteIplistsIdResponseDetails";

export const DeleteIplistsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteIplistsIdResponse.Raw,
    ButtonclikrApi.DeleteIplistsIdResponse
> = core.serialization.object({
    response: DeleteIplistsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteIplistsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteIplistsIdResponse {
    interface Raw {
        response?: DeleteIplistsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteIplistsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}