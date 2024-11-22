/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const PutInvoiceLineItemsIdRequest: core.serialization.Schema<
    serializers.PutInvoiceLineItemsIdRequest.Raw,
    ButtonclikrApi.PutInvoiceLineItemsIdRequest
> = core.serialization.object({
    invoice: core.serialization.unknown(),
    invoiceItem: core.serialization.unknown(),
    quantity: core.serialization.unknown(),
    price: core.serialization.unknown().optional(),
    discount: core.serialization.unknown().optional(),
});

export declare namespace PutInvoiceLineItemsIdRequest {
    interface Raw {
        invoice?: unknown;
        invoiceItem?: unknown;
        quantity?: unknown;
        price?: unknown | null;
        discount?: unknown | null;
    }
}
