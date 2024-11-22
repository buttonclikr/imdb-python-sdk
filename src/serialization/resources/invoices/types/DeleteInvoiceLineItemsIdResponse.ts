/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteInvoiceLineItemsIdResponseResponse } from "./DeleteInvoiceLineItemsIdResponseResponse";

export const DeleteInvoiceLineItemsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteInvoiceLineItemsIdResponse.Raw,
    ButtonclikrApi.DeleteInvoiceLineItemsIdResponse
> = core.serialization.object({
    response: DeleteInvoiceLineItemsIdResponseResponse.optional(),
});

export declare namespace DeleteInvoiceLineItemsIdResponse {
    interface Raw {
        response?: DeleteInvoiceLineItemsIdResponseResponse.Raw | null;
    }
}