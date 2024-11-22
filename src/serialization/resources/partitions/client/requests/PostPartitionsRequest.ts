/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostPartitionsRequestMinPasswordComplexity } from "../../types/PostPartitionsRequestMinPasswordComplexity";
import { PostPartitionsRequestNoEmailConfirmation } from "../../types/PostPartitionsRequestNoEmailConfirmation";
import { PostPartitionsRequestNoHoldEmail } from "../../types/PostPartitionsRequestNoHoldEmail";
import { PostPartitionsRequestChangeManagementEnabled } from "../../types/PostPartitionsRequestChangeManagementEnabled";
import { PostPartitionsRequestCurrency } from "../../types/PostPartitionsRequestCurrency";

export const PostPartitionsRequest: core.serialization.Schema<
    serializers.PostPartitionsRequest.Raw,
    ButtonclikrApi.PostPartitionsRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    name: core.serialization.unknown(),
    email: core.serialization.unknown(),
    minPasswordLength: core.serialization.unknown().optional(),
    minPasswordComplexity: PostPartitionsRequestMinPasswordComplexity.optional(),
    minPasswordHistory: core.serialization.unknown().optional(),
    noEmailConfirmation: PostPartitionsRequestNoEmailConfirmation,
    noHoldEmail: PostPartitionsRequestNoHoldEmail,
    changeManagementEnabled: PostPartitionsRequestChangeManagementEnabled,
    currency: PostPartitionsRequestCurrency.optional(),
});

export declare namespace PostPartitionsRequest {
    interface Raw {
        login?: unknown;
        name?: unknown;
        email?: unknown;
        minPasswordLength?: unknown | null;
        minPasswordComplexity?: PostPartitionsRequestMinPasswordComplexity.Raw | null;
        minPasswordHistory?: unknown | null;
        noEmailConfirmation: PostPartitionsRequestNoEmailConfirmation.Raw;
        noHoldEmail: PostPartitionsRequestNoHoldEmail.Raw;
        changeManagementEnabled: PostPartitionsRequestChangeManagementEnabled.Raw;
        currency?: PostPartitionsRequestCurrency.Raw | null;
    }
}