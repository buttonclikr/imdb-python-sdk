/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutDivisionsIdRequestChangeManagementEnabled: core.serialization.Schema<
    serializers.PutDivisionsIdRequestChangeManagementEnabled.Raw,
    ButtonclikrApi.PutDivisionsIdRequestChangeManagementEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutDivisionsIdRequestChangeManagementEnabled {
    type Raw = "0" | "1";
}