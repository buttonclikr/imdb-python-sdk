/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityCustomFieldsIdResponseResponseDetails } from "./GetEntityCustomFieldsIdResponseResponseDetails";

export const GetEntityCustomFieldsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetEntityCustomFieldsIdResponseResponse.Raw,
    ButtonclikrApi.GetEntityCustomFieldsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetEntityCustomFieldsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetEntityCustomFieldsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetEntityCustomFieldsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
