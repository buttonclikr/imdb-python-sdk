/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCurrencyRatesIdResponseResponseDetails } from "./GetCurrencyRatesIdResponseResponseDetails";

export const GetCurrencyRatesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetCurrencyRatesIdResponseResponse.Raw,
    ButtonclikrApi.GetCurrencyRatesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetCurrencyRatesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetCurrencyRatesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetCurrencyRatesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
