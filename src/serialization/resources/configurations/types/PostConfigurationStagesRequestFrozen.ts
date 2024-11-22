/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostConfigurationStagesRequestFrozen: core.serialization.Schema<
    serializers.PostConfigurationStagesRequestFrozen.Raw,
    ButtonclikrApi.PostConfigurationStagesRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostConfigurationStagesRequestFrozen {
    type Raw = "0" | "1";
}
