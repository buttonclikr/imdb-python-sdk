/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetRequestTokensIdResponseResponseDetailsPage } from "./GetRequestTokensIdResponseResponseDetailsPage";

export const GetRequestTokensIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetRequestTokensIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetRequestTokensIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetRequestTokensIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetRequestTokensIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetRequestTokensIdResponseResponseDetailsPage.Raw | null;
    }
}