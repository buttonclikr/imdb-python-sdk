/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityDatasResponseResponse } from "./GetEntityDatasResponseResponse";
import { GetEntityDatasResponseDetails } from "./GetEntityDatasResponseDetails";

export const GetEntityDatasResponse: core.serialization.ObjectSchema<
    serializers.GetEntityDatasResponse.Raw,
    ButtonclikrApi.GetEntityDatasResponse
> = core.serialization.object({
    response: GetEntityDatasResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetEntityDatasResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetEntityDatasResponse {
    interface Raw {
        response?: GetEntityDatasResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetEntityDatasResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
