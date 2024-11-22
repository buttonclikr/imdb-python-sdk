/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostValueAddedServicesFlowsRequestType: core.serialization.Schema<
    serializers.PostValueAddedServicesFlowsRequestType.Raw,
    ButtonclikrApi.PostValueAddedServicesFlowsRequestType
> = core.serialization.enum_(["omniToken", "passToken", "networkToken", "saferPayment"]);

export declare namespace PostValueAddedServicesFlowsRequestType {
    type Raw = "omniToken" | "passToken" | "networkToken" | "saferPayment";
}