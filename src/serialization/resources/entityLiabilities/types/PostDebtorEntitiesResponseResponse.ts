/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostDebtorEntitiesResponseResponseDetails } from "./PostDebtorEntitiesResponseResponseDetails";

export const PostDebtorEntitiesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostDebtorEntitiesResponseResponse.Raw,
    ButtonclikrApi.PostDebtorEntitiesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostDebtorEntitiesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostDebtorEntitiesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostDebtorEntitiesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
