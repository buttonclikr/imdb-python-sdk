/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBinsIdRequestInactive: core.serialization.Schema<
    serializers.PutBinsIdRequestInactive.Raw,
    ButtonclikrApi.PutBinsIdRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutBinsIdRequestInactive {
    type Raw = "0" | "1";
}