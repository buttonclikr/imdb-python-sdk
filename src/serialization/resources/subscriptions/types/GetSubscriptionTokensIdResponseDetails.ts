/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetSubscriptionTokensIdResponseDetailsPage } from "./GetSubscriptionTokensIdResponseDetailsPage";

export const GetSubscriptionTokensIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetSubscriptionTokensIdResponseDetails.Raw,
    ButtonclikrApi.GetSubscriptionTokensIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetSubscriptionTokensIdResponseDetailsPage.optional(),
});

export declare namespace GetSubscriptionTokensIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetSubscriptionTokensIdResponseDetailsPage.Raw | null;
    }
}