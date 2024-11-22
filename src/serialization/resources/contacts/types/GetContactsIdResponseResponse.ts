/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetContactsIdResponseResponseDetails } from "./GetContactsIdResponseResponseDetails";

export const GetContactsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetContactsIdResponseResponse.Raw,
    ButtonclikrApi.GetContactsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetContactsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetContactsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetContactsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
