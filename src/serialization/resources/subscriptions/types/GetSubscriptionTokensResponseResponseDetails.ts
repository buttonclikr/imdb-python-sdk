/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetSubscriptionTokensResponseResponseDetailsPage } from "./GetSubscriptionTokensResponseResponseDetailsPage";

export const GetSubscriptionTokensResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetSubscriptionTokensResponseResponseDetails.Raw,
    ButtonclikrApi.GetSubscriptionTokensResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetSubscriptionTokensResponseResponseDetailsPage.optional(),
});

export declare namespace GetSubscriptionTokensResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetSubscriptionTokensResponseResponseDetailsPage.Raw | null;
    }
}