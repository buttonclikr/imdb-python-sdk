/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutSecretsIdRequestLocked: core.serialization.Schema<
    serializers.PutSecretsIdRequestLocked.Raw,
    ButtonclikrApi.PutSecretsIdRequestLocked
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutSecretsIdRequestLocked {
    type Raw = "0" | "1";
}