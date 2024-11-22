/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostCurrencyRatesResponseResponseDetails } from "./PostCurrencyRatesResponseResponseDetails";

export const PostCurrencyRatesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostCurrencyRatesResponseResponse.Raw,
    ButtonclikrApi.PostCurrencyRatesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostCurrencyRatesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostCurrencyRatesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostCurrencyRatesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
