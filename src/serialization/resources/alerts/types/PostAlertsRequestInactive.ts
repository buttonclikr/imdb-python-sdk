/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostAlertsRequestInactive: core.serialization.Schema<
    serializers.PostAlertsRequestInactive.Raw,
    ButtonclikrApi.PostAlertsRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostAlertsRequestInactive {
    type Raw = "0" | "1";
}
