/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostConfigurationsResponseResponseDetailsPage } from "./PostConfigurationsResponseResponseDetailsPage";

export const PostConfigurationsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostConfigurationsResponseResponseDetails.Raw,
    ButtonclikrApi.PostConfigurationsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostConfigurationsResponseResponseDetailsPage.optional(),
});

export declare namespace PostConfigurationsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostConfigurationsResponseResponseDetailsPage.Raw | null;
    }
}
