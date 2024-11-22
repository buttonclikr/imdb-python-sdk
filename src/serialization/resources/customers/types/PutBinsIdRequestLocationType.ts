/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBinsIdRequestLocationType: core.serialization.Schema<
    serializers.PutBinsIdRequestLocationType.Raw,
    ButtonclikrApi.PutBinsIdRequestLocationType
> = core.serialization.enum_(["branch", "main"]);

export declare namespace PutBinsIdRequestLocationType {
    type Raw = "branch" | "main";
}