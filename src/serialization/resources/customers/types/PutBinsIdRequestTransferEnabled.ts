/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBinsIdRequestTransferEnabled: core.serialization.Schema<
    serializers.PutBinsIdRequestTransferEnabled.Raw,
    ButtonclikrApi.PutBinsIdRequestTransferEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutBinsIdRequestTransferEnabled {
    type Raw = "0" | "1";
}