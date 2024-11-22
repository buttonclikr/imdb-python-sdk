/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutDebtorEntitiesIdResponseResponseDetails } from "./PutDebtorEntitiesIdResponseResponseDetails";

export const PutDebtorEntitiesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutDebtorEntitiesIdResponseResponse.Raw,
    ButtonclikrApi.PutDebtorEntitiesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutDebtorEntitiesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutDebtorEntitiesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutDebtorEntitiesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}