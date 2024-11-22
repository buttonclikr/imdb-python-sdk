/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutConfigurationsIdResponseResponseDetails } from "./PutConfigurationsIdResponseResponseDetails";

export const PutConfigurationsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutConfigurationsIdResponseResponse.Raw,
    ButtonclikrApi.PutConfigurationsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutConfigurationsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutConfigurationsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutConfigurationsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
