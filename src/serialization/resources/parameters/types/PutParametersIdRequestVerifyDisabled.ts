/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutParametersIdRequestVerifyDisabled: core.serialization.Schema<
    serializers.PutParametersIdRequestVerifyDisabled.Raw,
    ButtonclikrApi.PutParametersIdRequestVerifyDisabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutParametersIdRequestVerifyDisabled {
    type Raw = "0" | "1";
}
