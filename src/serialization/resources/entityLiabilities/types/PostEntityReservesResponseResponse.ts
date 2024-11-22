/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostEntityReservesResponseResponseDetails } from "./PostEntityReservesResponseResponseDetails";

export const PostEntityReservesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostEntityReservesResponseResponse.Raw,
    ButtonclikrApi.PostEntityReservesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostEntityReservesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostEntityReservesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostEntityReservesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}