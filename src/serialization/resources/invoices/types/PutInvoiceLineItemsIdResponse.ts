/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutInvoiceLineItemsIdResponseResponse } from "./PutInvoiceLineItemsIdResponseResponse";

export const PutInvoiceLineItemsIdResponse: core.serialization.ObjectSchema<
    serializers.PutInvoiceLineItemsIdResponse.Raw,
    ButtonclikrApi.PutInvoiceLineItemsIdResponse
> = core.serialization.object({
    response: PutInvoiceLineItemsIdResponseResponse.optional(),
});

export declare namespace PutInvoiceLineItemsIdResponse {
    interface Raw {
        response?: PutInvoiceLineItemsIdResponseResponse.Raw | null;
    }
}