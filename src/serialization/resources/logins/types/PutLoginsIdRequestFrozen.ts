/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutLoginsIdRequestFrozen: core.serialization.Schema<
    serializers.PutLoginsIdRequestFrozen.Raw,
    ButtonclikrApi.PutLoginsIdRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutLoginsIdRequestFrozen {
    type Raw = "0" | "1";
}