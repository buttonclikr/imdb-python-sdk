/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutOrgFlowActionsIdRequestAction } from "../../types/PutOrgFlowActionsIdRequestAction";

export const PutOrgFlowActionsIdRequest: core.serialization.Schema<
    serializers.PutOrgFlowActionsIdRequest.Raw,
    ButtonclikrApi.PutOrgFlowActionsIdRequest
> = core.serialization.object({
    orgFlow: core.serialization.unknown(),
    org: core.serialization.unknown(),
    action: PutOrgFlowActionsIdRequestAction,
});

export declare namespace PutOrgFlowActionsIdRequest {
    interface Raw {
        orgFlow?: unknown;
        org?: unknown;
        action: PutOrgFlowActionsIdRequestAction.Raw;
    }
}
