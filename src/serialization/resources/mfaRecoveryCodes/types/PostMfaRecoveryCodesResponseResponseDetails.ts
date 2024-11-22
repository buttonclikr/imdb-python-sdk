/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMfaRecoveryCodesResponseResponseDetailsPage } from "./PostMfaRecoveryCodesResponseResponseDetailsPage";

export const PostMfaRecoveryCodesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostMfaRecoveryCodesResponseResponseDetails.Raw,
    ButtonclikrApi.PostMfaRecoveryCodesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostMfaRecoveryCodesResponseResponseDetailsPage.optional(),
});

export declare namespace PostMfaRecoveryCodesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostMfaRecoveryCodesResponseResponseDetailsPage.Raw | null;
    }
}