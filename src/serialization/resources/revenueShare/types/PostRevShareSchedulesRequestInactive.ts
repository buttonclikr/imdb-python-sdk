/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostRevShareSchedulesRequestInactive: core.serialization.Schema<
    serializers.PostRevShareSchedulesRequestInactive.Raw,
    ButtonclikrApi.PostRevShareSchedulesRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostRevShareSchedulesRequestInactive {
    type Raw = "0" | "1";
}
