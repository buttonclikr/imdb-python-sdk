/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutFeesIdRequestType: core.serialization.Schema<
    serializers.PutFeesIdRequestType.Raw,
    ButtonclikrApi.PutFeesIdRequestType
> = core.serialization.enum_(["1", "2"]);

export declare namespace PutFeesIdRequestType {
    type Raw = "1" | "2";
}
