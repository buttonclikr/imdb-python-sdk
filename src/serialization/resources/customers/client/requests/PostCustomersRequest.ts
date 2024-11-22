/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostCustomersRequestShippingState } from "../../types/PostCustomersRequestShippingState";
import { PostCustomersRequestShippingCountry } from "../../types/PostCustomersRequestShippingCountry";
import { PostCustomersRequestState } from "../../types/PostCustomersRequestState";
import { PostCustomersRequestCountry } from "../../types/PostCustomersRequestCountry";
import { Frozen } from "../../../../types/Frozen";
import { Inactive } from "../../../../types/Inactive";

export const PostCustomersRequest: core.serialization.Schema<
    serializers.PostCustomersRequest.Raw,
    ButtonclikrApi.PostCustomersRequest
> = core.serialization.object({
    login: core.serialization.string(),
    merchant: core.serialization.string().optional(),
    entity: core.serialization.string().optional(),
    first: core.serialization.string().optional(),
    middle: core.serialization.string().optional(),
    last: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    shippingFirst: core.serialization.string().optional(),
    shippingMiddle: core.serialization.string().optional(),
    shippingLast: core.serialization.string().optional(),
    shippingCompany: core.serialization.string().optional(),
    shippingAddress1: core.serialization.string().optional(),
    shippingAddress2: core.serialization.string().optional(),
    shippingCity: core.serialization.string().optional(),
    shippingState: PostCustomersRequestShippingState.optional(),
    shippingZip: core.serialization.string().optional(),
    shippingCountry: PostCustomersRequestShippingCountry.optional(),
    shippingPhone: core.serialization.string().optional(),
    shippingFax: core.serialization.string().optional(),
    custom: core.serialization.string().optional(),
    authTokenCustomer: core.serialization.unknown().optional(),
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: PostCustomersRequestState.optional(),
    zip: core.serialization.string().optional(),
    country: PostCustomersRequestCountry.optional(),
    phone: core.serialization.string().optional(),
    fax: core.serialization.string().optional(),
    frozen: Frozen,
    inactive: Inactive,
});

export declare namespace PostCustomersRequest {
    interface Raw {
        login: string;
        merchant?: string | null;
        entity?: string | null;
        first?: string | null;
        middle?: string | null;
        last?: string | null;
        company?: string | null;
        email?: string | null;
        shippingFirst?: string | null;
        shippingMiddle?: string | null;
        shippingLast?: string | null;
        shippingCompany?: string | null;
        shippingAddress1?: string | null;
        shippingAddress2?: string | null;
        shippingCity?: string | null;
        shippingState?: PostCustomersRequestShippingState.Raw | null;
        shippingZip?: string | null;
        shippingCountry?: PostCustomersRequestShippingCountry.Raw | null;
        shippingPhone?: string | null;
        shippingFax?: string | null;
        custom?: string | null;
        authTokenCustomer?: unknown | null;
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        state?: PostCustomersRequestState.Raw | null;
        zip?: string | null;
        country?: PostCustomersRequestCountry.Raw | null;
        phone?: string | null;
        fax?: string | null;
        frozen: Frozen.Raw;
        inactive: Inactive.Raw;
    }
}
