/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetInvoiceItemsIdResponseResponseDetails } from "./GetInvoiceItemsIdResponseResponseDetails";

export const GetInvoiceItemsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetInvoiceItemsIdResponseResponse.Raw,
    ButtonclikrApi.GetInvoiceItemsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetInvoiceItemsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetInvoiceItemsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetInvoiceItemsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
