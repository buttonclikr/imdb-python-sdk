/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteValueAddedServicesIdResponseResponseDetails } from "./DeleteValueAddedServicesIdResponseResponseDetails";

export const DeleteValueAddedServicesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteValueAddedServicesIdResponseResponse.Raw,
    ButtonclikrApi.DeleteValueAddedServicesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteValueAddedServicesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteValueAddedServicesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteValueAddedServicesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}