/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostInvoiceResultsRequestStatus } from "../../types/PostInvoiceResultsRequestStatus";
import { PostInvoiceResultsRequestShippingCountry } from "../../types/PostInvoiceResultsRequestShippingCountry";

export const PostInvoiceResultsRequest: core.serialization.Schema<
    serializers.PostInvoiceResultsRequest.Raw,
    ButtonclikrApi.PostInvoiceResultsRequest
> = core.serialization.object({
    invoice: core.serialization.unknown(),
    txn: core.serialization.unknown().optional(),
    status: PostInvoiceResultsRequestStatus.optional(),
    message: core.serialization.unknown().optional(),
    shippingFirst: core.serialization.unknown().optional(),
    shippingMiddle: core.serialization.unknown().optional(),
    shippingLast: core.serialization.unknown().optional(),
    shippingCompany: core.serialization.unknown().optional(),
    shippingAddress1: core.serialization.unknown().optional(),
    shippingAddress2: core.serialization.unknown().optional(),
    shippingCity: core.serialization.unknown().optional(),
    shippingState: core.serialization.string().optional(),
    shippingZip: core.serialization.unknown().optional(),
    shippingCountry: PostInvoiceResultsRequestShippingCountry.optional(),
    shippingPhone: core.serialization.unknown().optional(),
    shippingFax: core.serialization.unknown().optional(),
    authorization: core.serialization.unknown().optional(),
    authorizationData: core.serialization.unknown().optional(),
    signature: core.serialization.unknown().optional(),
});

export declare namespace PostInvoiceResultsRequest {
    interface Raw {
        invoice?: unknown;
        txn?: unknown | null;
        status?: PostInvoiceResultsRequestStatus.Raw | null;
        message?: unknown | null;
        shippingFirst?: unknown | null;
        shippingMiddle?: unknown | null;
        shippingLast?: unknown | null;
        shippingCompany?: unknown | null;
        shippingAddress1?: unknown | null;
        shippingAddress2?: unknown | null;
        shippingCity?: unknown | null;
        shippingState?: string | null;
        shippingZip?: unknown | null;
        shippingCountry?: PostInvoiceResultsRequestShippingCountry.Raw | null;
        shippingPhone?: unknown | null;
        shippingFax?: unknown | null;
        authorization?: unknown | null;
        authorizationData?: unknown | null;
        signature?: unknown | null;
    }
}