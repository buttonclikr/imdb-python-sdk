/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetOrgEntitiesResponseDetailsPage } from "./GetOrgEntitiesResponseDetailsPage";

export const GetOrgEntitiesResponseDetails: core.serialization.ObjectSchema<
    serializers.GetOrgEntitiesResponseDetails.Raw,
    ButtonclikrApi.GetOrgEntitiesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetOrgEntitiesResponseDetailsPage.optional(),
});

export declare namespace GetOrgEntitiesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetOrgEntitiesResponseDetailsPage.Raw | null;
    }
}