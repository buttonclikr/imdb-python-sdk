/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteOrgFlowActionsIdResponseResponseDetailsPage } from "./DeleteOrgFlowActionsIdResponseResponseDetailsPage";

export const DeleteOrgFlowActionsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteOrgFlowActionsIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteOrgFlowActionsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteOrgFlowActionsIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteOrgFlowActionsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteOrgFlowActionsIdResponseResponseDetailsPage.Raw | null;
    }
}