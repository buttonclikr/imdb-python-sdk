/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutInvoiceParametersIdResponseResponseDetailsPage } from "./PutInvoiceParametersIdResponseResponseDetailsPage";

export const PutInvoiceParametersIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutInvoiceParametersIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutInvoiceParametersIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutInvoiceParametersIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutInvoiceParametersIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutInvoiceParametersIdResponseResponseDetailsPage.Raw | null;
    }
}