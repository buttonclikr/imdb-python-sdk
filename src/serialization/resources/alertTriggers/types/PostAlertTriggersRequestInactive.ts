/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostAlertTriggersRequestInactive: core.serialization.Schema<
    serializers.PostAlertTriggersRequestInactive.Raw,
    ButtonclikrApi.PostAlertTriggersRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostAlertTriggersRequestInactive {
    type Raw = "0" | "1";
}