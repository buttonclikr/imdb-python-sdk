/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteOrgEntitiesIdResponseDetailsPage } from "./DeleteOrgEntitiesIdResponseDetailsPage";

export const DeleteOrgEntitiesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteOrgEntitiesIdResponseDetails.Raw,
    ButtonclikrApi.DeleteOrgEntitiesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteOrgEntitiesIdResponseDetailsPage.optional(),
});

export declare namespace DeleteOrgEntitiesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteOrgEntitiesIdResponseDetailsPage.Raw | null;
    }
}