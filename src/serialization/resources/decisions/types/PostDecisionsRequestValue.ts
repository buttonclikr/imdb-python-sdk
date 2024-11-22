/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostDecisionsRequestValue: core.serialization.Schema<
    serializers.PostDecisionsRequestValue.Raw,
    ButtonclikrApi.PostDecisionsRequestValue
> = core.serialization.enum_(["1", "2", "3"]);

export declare namespace PostDecisionsRequestValue {
    type Raw = "1" | "2" | "3";
}
