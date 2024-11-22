/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostInvoiceItemsResponseResponseDetails } from "./PostInvoiceItemsResponseResponseDetails";

export const PostInvoiceItemsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostInvoiceItemsResponseResponse.Raw,
    ButtonclikrApi.PostInvoiceItemsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostInvoiceItemsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostInvoiceItemsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostInvoiceItemsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}