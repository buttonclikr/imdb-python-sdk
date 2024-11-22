/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutOrgFlowActionsIdResponseDetailsPage } from "./PutOrgFlowActionsIdResponseDetailsPage";

export const PutOrgFlowActionsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutOrgFlowActionsIdResponseDetails.Raw,
    ButtonclikrApi.PutOrgFlowActionsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutOrgFlowActionsIdResponseDetailsPage.optional(),
});

export declare namespace PutOrgFlowActionsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutOrgFlowActionsIdResponseDetailsPage.Raw | null;
    }
}