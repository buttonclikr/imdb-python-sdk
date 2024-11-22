/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetInvoiceResultsResponseResponseDetailsPage } from "./GetInvoiceResultsResponseResponseDetailsPage";

export const GetInvoiceResultsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetInvoiceResultsResponseResponseDetails.Raw,
    ButtonclikrApi.GetInvoiceResultsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetInvoiceResultsResponseResponseDetailsPage.optional(),
});

export declare namespace GetInvoiceResultsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetInvoiceResultsResponseResponseDetailsPage.Raw | null;
    }
}