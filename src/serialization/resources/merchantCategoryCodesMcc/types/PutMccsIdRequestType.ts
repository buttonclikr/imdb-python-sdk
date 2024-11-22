/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutMccsIdRequestType: core.serialization.Schema<
    serializers.PutMccsIdRequestType.Raw,
    ButtonclikrApi.PutMccsIdRequestType
> = core.serialization.enum_(["blacklist", "whitelist"]);

export declare namespace PutMccsIdRequestType {
    type Raw = "blacklist" | "whitelist";
}