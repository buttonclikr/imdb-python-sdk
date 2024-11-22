/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostOrgEntitiesResponseDetailsPage } from "./PostOrgEntitiesResponseDetailsPage";

export const PostOrgEntitiesResponseDetails: core.serialization.ObjectSchema<
    serializers.PostOrgEntitiesResponseDetails.Raw,
    ButtonclikrApi.PostOrgEntitiesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostOrgEntitiesResponseDetailsPage.optional(),
});

export declare namespace PostOrgEntitiesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostOrgEntitiesResponseDetailsPage.Raw | null;
    }
}