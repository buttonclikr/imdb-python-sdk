/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostDecisionsRequestAction: core.serialization.Schema<
    serializers.PostDecisionsRequestAction.Raw,
    ButtonclikrApi.PostDecisionsRequestAction
> = core.serialization.enum_(["0", "1", "3", "4", "5", "6", "8"]);

export declare namespace PostDecisionsRequestAction {
    type Raw = "0" | "1" | "3" | "4" | "5" | "6" | "8";
}
