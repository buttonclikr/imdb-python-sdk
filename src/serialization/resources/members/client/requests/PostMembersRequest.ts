/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostMembersRequestCitizenship } from "../../types/PostMembersRequestCitizenship";
import { PostMembersRequestGender } from "../../types/PostMembersRequestGender";
import { PostMembersRequestPrimary } from "../../types/PostMembersRequestPrimary";
import { PostMembersRequestSignificantResponsibility } from "../../types/PostMembersRequestSignificantResponsibility";
import { PostMembersRequestPoliticallyExposed } from "../../types/PostMembersRequestPoliticallyExposed";
import { PostMembersRequestMailingCountry } from "../../types/PostMembersRequestMailingCountry";
import { PostMembersRequestTimezone } from "../../types/PostMembersRequestTimezone";
import { PostMembersRequestCountry } from "../../types/PostMembersRequestCountry";
import { PostMembersRequestInactive } from "../../types/PostMembersRequestInactive";
import { PostMembersRequestFrozen } from "../../types/PostMembersRequestFrozen";

export const PostMembersRequest: core.serialization.Schema<
    serializers.PostMembersRequest.Raw,
    ButtonclikrApi.PostMembersRequest
> = core.serialization.object({
    merchant: core.serialization.unknown(),
    title: core.serialization.unknown().optional(),
    first: core.serialization.unknown(),
    middle: core.serialization.unknown().optional(),
    last: core.serialization.unknown(),
    ssn: core.serialization.unknown().optional(),
    citizenship: PostMembersRequestCitizenship.optional(),
    dob: core.serialization.unknown(),
    gender: PostMembersRequestGender.optional(),
    dl: core.serialization.unknown().optional(),
    dlstate: core.serialization.string().optional(),
    email: core.serialization.unknown(),
    ownership: core.serialization.unknown(),
    primary: PostMembersRequestPrimary,
    creditScore: core.serialization.unknown().optional(),
    creditScoreDate: core.serialization.unknown().optional(),
    significantResponsibility: PostMembersRequestSignificantResponsibility,
    politicallyExposed: PostMembersRequestPoliticallyExposed,
    mailingAddress1: core.serialization.unknown().optional(),
    mailingAddress2: core.serialization.unknown().optional(),
    mailingCity: core.serialization.unknown().optional(),
    mailingState: core.serialization.string().optional(),
    mailingCountry: PostMembersRequestMailingCountry.optional(),
    mailingPostalCode: core.serialization.unknown().optional(),
    treasuryPrimeRoles: core.serialization.unknown().optional(),
    timezone: PostMembersRequestTimezone,
    address1: core.serialization.unknown().optional(),
    address2: core.serialization.unknown().optional(),
    city: core.serialization.unknown().optional(),
    state: core.serialization.string().optional(),
    zip: core.serialization.unknown().optional(),
    country: PostMembersRequestCountry.optional(),
    phone: core.serialization.unknown().optional(),
    fax: core.serialization.unknown().optional(),
    inactive: PostMembersRequestInactive,
    frozen: PostMembersRequestFrozen,
});

export declare namespace PostMembersRequest {
    interface Raw {
        merchant?: unknown;
        title?: unknown | null;
        first?: unknown;
        middle?: unknown | null;
        last?: unknown;
        ssn?: unknown | null;
        citizenship?: PostMembersRequestCitizenship.Raw | null;
        dob?: unknown;
        gender?: PostMembersRequestGender.Raw | null;
        dl?: unknown | null;
        dlstate?: string | null;
        email?: unknown;
        ownership?: unknown;
        primary: PostMembersRequestPrimary.Raw;
        creditScore?: unknown | null;
        creditScoreDate?: unknown | null;
        significantResponsibility: PostMembersRequestSignificantResponsibility.Raw;
        politicallyExposed: PostMembersRequestPoliticallyExposed.Raw;
        mailingAddress1?: unknown | null;
        mailingAddress2?: unknown | null;
        mailingCity?: unknown | null;
        mailingState?: string | null;
        mailingCountry?: PostMembersRequestMailingCountry.Raw | null;
        mailingPostalCode?: unknown | null;
        treasuryPrimeRoles?: unknown | null;
        timezone: PostMembersRequestTimezone.Raw;
        address1?: unknown | null;
        address2?: unknown | null;
        city?: unknown | null;
        state?: string | null;
        zip?: unknown | null;
        country?: PostMembersRequestCountry.Raw | null;
        phone?: unknown | null;
        fax?: unknown | null;
        inactive: PostMembersRequestInactive.Raw;
        frozen: PostMembersRequestFrozen.Raw;
    }
}