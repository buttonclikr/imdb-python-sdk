/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostValueAddedServicesFlowsRequestProgram: core.serialization.Schema<
    serializers.PostValueAddedServicesFlowsRequestProgram.Raw,
    ButtonclikrApi.PostValueAddedServicesFlowsRequestProgram
> = core.serialization.enum_(["Basic", "Managed"]);

export declare namespace PostValueAddedServicesFlowsRequestProgram {
    type Raw = "Basic" | "Managed";
}