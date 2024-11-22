/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutInvoiceItemsIdResponseResponseDetailsPage } from "./PutInvoiceItemsIdResponseResponseDetailsPage";

export const PutInvoiceItemsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutInvoiceItemsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutInvoiceItemsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutInvoiceItemsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutInvoiceItemsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutInvoiceItemsIdResponseResponseDetailsPage.Raw | null;
    }
}