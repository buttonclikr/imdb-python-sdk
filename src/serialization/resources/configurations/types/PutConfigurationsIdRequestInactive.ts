/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutConfigurationsIdRequestInactive: core.serialization.Schema<
    serializers.PutConfigurationsIdRequestInactive.Raw,
    ButtonclikrApi.PutConfigurationsIdRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutConfigurationsIdRequestInactive {
    type Raw = "0" | "1";
}
