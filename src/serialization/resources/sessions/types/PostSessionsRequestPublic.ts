/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostSessionsRequestPublic: core.serialization.Schema<
    serializers.PostSessionsRequestPublic.Raw,
    ButtonclikrApi.PostSessionsRequestPublic
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostSessionsRequestPublic {
    type Raw = "0" | "1";
}