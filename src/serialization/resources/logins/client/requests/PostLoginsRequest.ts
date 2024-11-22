/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostLoginsRequestConfirmed } from "../../types/PostLoginsRequestConfirmed";
import { PostLoginsRequestPortalAccess } from "../../types/PostLoginsRequestPortalAccess";
import { PostLoginsRequestMfaEnabled } from "../../types/PostLoginsRequestMfaEnabled";
import { PostLoginsRequestCountry } from "../../types/PostLoginsRequestCountry";
import { PostLoginsRequestInactive } from "../../types/PostLoginsRequestInactive";
import { PostLoginsRequestFrozen } from "../../types/PostLoginsRequestFrozen";

export const PostLoginsRequest: core.serialization.Schema<
    serializers.PostLoginsRequest.Raw,
    ButtonclikrApi.PostLoginsRequest
> = core.serialization.object({
    login: core.serialization.unknown().optional(),
    partition: core.serialization.unknown(),
    division: core.serialization.unknown().optional(),
    parentDivision: core.serialization.unknown().optional(),
    roles: core.serialization.unknown(),
    confirmed: PostLoginsRequestConfirmed,
    username: core.serialization.unknown(),
    password: core.serialization.unknown(),
    first: core.serialization.unknown(),
    middle: core.serialization.unknown().optional(),
    last: core.serialization.unknown(),
    email: core.serialization.unknown(),
    allowedResources: core.serialization.unknown(),
    restrictedResources: core.serialization.unknown(),
    portalAccess: PostLoginsRequestPortalAccess,
    mfaEnabled: PostLoginsRequestMfaEnabled,
    mfaSecret: core.serialization.unknown().optional(),
    mfaEnrolledDate: core.serialization.unknown().optional(),
    mfaType: core.serialization.unknown().optional(),
    address1: core.serialization.unknown().optional(),
    address2: core.serialization.unknown().optional(),
    city: core.serialization.unknown().optional(),
    state: core.serialization.string().optional(),
    zip: core.serialization.unknown().optional(),
    country: PostLoginsRequestCountry.optional(),
    phone: core.serialization.unknown().optional(),
    fax: core.serialization.unknown().optional(),
    inactive: PostLoginsRequestInactive,
    frozen: PostLoginsRequestFrozen,
});

export declare namespace PostLoginsRequest {
    interface Raw {
        login?: unknown | null;
        partition?: unknown;
        division?: unknown | null;
        parentDivision?: unknown | null;
        roles?: unknown;
        confirmed: PostLoginsRequestConfirmed.Raw;
        username?: unknown;
        password?: unknown;
        first?: unknown;
        middle?: unknown | null;
        last?: unknown;
        email?: unknown;
        allowedResources?: unknown;
        restrictedResources?: unknown;
        portalAccess: PostLoginsRequestPortalAccess.Raw;
        mfaEnabled: PostLoginsRequestMfaEnabled.Raw;
        mfaSecret?: unknown | null;
        mfaEnrolledDate?: unknown | null;
        mfaType?: unknown | null;
        address1?: unknown | null;
        address2?: unknown | null;
        city?: unknown | null;
        state?: string | null;
        zip?: unknown | null;
        country?: PostLoginsRequestCountry.Raw | null;
        phone?: unknown | null;
        fax?: unknown | null;
        inactive: PostLoginsRequestInactive.Raw;
        frozen: PostLoginsRequestFrozen.Raw;
    }
}
