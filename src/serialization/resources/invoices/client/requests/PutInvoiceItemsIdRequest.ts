/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutInvoiceItemsIdRequestInactive } from "../../types/PutInvoiceItemsIdRequestInactive";
import { PutInvoiceItemsIdRequestFrozen } from "../../types/PutInvoiceItemsIdRequestFrozen";

export const PutInvoiceItemsIdRequest: core.serialization.Schema<
    serializers.PutInvoiceItemsIdRequest.Raw,
    ButtonclikrApi.PutInvoiceItemsIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    item: core.serialization.unknown(),
    description: core.serialization.unknown().optional(),
    custom: core.serialization.unknown().optional(),
    price: core.serialization.unknown(),
    um: core.serialization.unknown().optional(),
    commodityCode: core.serialization.unknown().optional(),
    productCode: core.serialization.unknown().optional(),
    inactive: PutInvoiceItemsIdRequestInactive,
    frozen: PutInvoiceItemsIdRequestFrozen,
});

export declare namespace PutInvoiceItemsIdRequest {
    interface Raw {
        login?: unknown;
        item?: unknown;
        description?: unknown | null;
        custom?: unknown | null;
        price?: unknown;
        um?: unknown | null;
        commodityCode?: unknown | null;
        productCode?: unknown | null;
        inactive: PutInvoiceItemsIdRequestInactive.Raw;
        frozen: PutInvoiceItemsIdRequestFrozen.Raw;
    }
}
