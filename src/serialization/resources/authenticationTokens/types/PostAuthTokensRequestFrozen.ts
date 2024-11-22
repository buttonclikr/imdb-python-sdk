/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostAuthTokensRequestFrozen: core.serialization.Schema<
    serializers.PostAuthTokensRequestFrozen.Raw,
    ButtonclikrApi.PostAuthTokensRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostAuthTokensRequestFrozen {
    type Raw = "0" | "1";
}
