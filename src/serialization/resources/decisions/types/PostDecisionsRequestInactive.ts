/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostDecisionsRequestInactive: core.serialization.Schema<
    serializers.PostDecisionsRequestInactive.Raw,
    ButtonclikrApi.PostDecisionsRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostDecisionsRequestInactive {
    type Raw = "0" | "1";
}
