/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutMembersIdResponseResponseDetails } from "./PutMembersIdResponseResponseDetails";

export const PutMembersIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutMembersIdResponseResponse.Raw,
    ButtonclikrApi.PutMembersIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutMembersIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutMembersIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutMembersIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}