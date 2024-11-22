/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutCurrencyRatesIdResponseResponseDetailsPage } from "./PutCurrencyRatesIdResponseResponseDetailsPage";

export const PutCurrencyRatesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutCurrencyRatesIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutCurrencyRatesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutCurrencyRatesIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutCurrencyRatesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutCurrencyRatesIdResponseResponseDetailsPage.Raw | null;
    }
}