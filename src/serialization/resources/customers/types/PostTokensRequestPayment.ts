/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTokensRequestPayment: core.serialization.ObjectSchema<
    serializers.PostTokensRequestPayment.Raw,
    ButtonclikrApi.PostTokensRequestPayment
> = core.serialization.object({
    method: core.serialization.string(),
    number: core.serialization.unknown(),
    routing: core.serialization.unknown().optional(),
    expiration: core.serialization.unknown().optional(),
    cvv: core.serialization.unknown().optional(),
    track: core.serialization.unknown().optional(),
});

export declare namespace PostTokensRequestPayment {
    interface Raw {
        method: string;
        number?: unknown;
        routing?: unknown | null;
        expiration?: unknown | null;
        cvv?: unknown | null;
        track?: unknown | null;
    }
}