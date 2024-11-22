/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetContactsResponseResponse } from "./GetContactsResponseResponse";
import { GetContactsResponseDetails } from "./GetContactsResponseDetails";

export const GetContactsResponse: core.serialization.ObjectSchema<
    serializers.GetContactsResponse.Raw,
    ButtonclikrApi.GetContactsResponse
> = core.serialization.object({
    response: GetContactsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetContactsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetContactsResponse {
    interface Raw {
        response?: GetContactsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetContactsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
