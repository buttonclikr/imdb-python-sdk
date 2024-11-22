/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetInvoiceParametersResponseResponseDetailsPage } from "./GetInvoiceParametersResponseResponseDetailsPage";

export const GetInvoiceParametersResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetInvoiceParametersResponseResponseDetails.Raw,
    ButtonclikrApi.GetInvoiceParametersResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetInvoiceParametersResponseResponseDetailsPage.optional(),
});

export declare namespace GetInvoiceParametersResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetInvoiceParametersResponseResponseDetailsPage.Raw | null;
    }
}