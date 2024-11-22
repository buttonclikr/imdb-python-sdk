/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostConfigurationStagesResponseResponseDetailsPage } from "./PostConfigurationStagesResponseResponseDetailsPage";

export const PostConfigurationStagesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostConfigurationStagesResponseResponseDetails.Raw,
    ButtonclikrApi.PostConfigurationStagesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostConfigurationStagesResponseResponseDetailsPage.optional(),
});

export declare namespace PostConfigurationStagesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostConfigurationStagesResponseResponseDetailsPage.Raw | null;
    }
}