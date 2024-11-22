/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostInvoiceResultsResponseResponse } from "./PostInvoiceResultsResponseResponse";

export const PostInvoiceResultsResponse: core.serialization.ObjectSchema<
    serializers.PostInvoiceResultsResponse.Raw,
    ButtonclikrApi.PostInvoiceResultsResponse
> = core.serialization.object({
    response: PostInvoiceResultsResponseResponse.optional(),
});

export declare namespace PostInvoiceResultsResponse {
    interface Raw {
        response?: PostInvoiceResultsResponseResponse.Raw | null;
    }
}
