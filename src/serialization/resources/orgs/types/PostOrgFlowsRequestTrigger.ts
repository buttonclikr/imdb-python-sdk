/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostOrgFlowsRequestTrigger: core.serialization.Schema<
    serializers.PostOrgFlowsRequestTrigger.Raw,
    ButtonclikrApi.PostOrgFlowsRequestTrigger
> = core.serialization.enum_(["create", "low", "high", "board"]);

export declare namespace PostOrgFlowsRequestTrigger {
    type Raw = "create" | "low" | "high" | "board";
}