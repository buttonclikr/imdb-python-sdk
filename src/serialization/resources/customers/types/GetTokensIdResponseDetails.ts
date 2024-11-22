/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTokensIdResponseDetailsPage } from "./GetTokensIdResponseDetailsPage";

export const GetTokensIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTokensIdResponseDetails.Raw,
    ButtonclikrApi.GetTokensIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTokensIdResponseDetailsPage.optional(),
});

export declare namespace GetTokensIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTokensIdResponseDetailsPage.Raw | null;
    }
}
