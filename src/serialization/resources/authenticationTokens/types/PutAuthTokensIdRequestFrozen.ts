/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutAuthTokensIdRequestFrozen: core.serialization.Schema<
    serializers.PutAuthTokensIdRequestFrozen.Raw,
    ButtonclikrApi.PutAuthTokensIdRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutAuthTokensIdRequestFrozen {
    type Raw = "0" | "1";
}
