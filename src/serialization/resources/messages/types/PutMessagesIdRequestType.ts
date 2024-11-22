/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutMessagesIdRequestType: core.serialization.Schema<
    serializers.PutMessagesIdRequestType.Raw,
    ButtonclikrApi.PutMessagesIdRequestType
> = core.serialization.enum_(["incoming", "outgoing"]);

export declare namespace PutMessagesIdRequestType {
    type Raw = "incoming" | "outgoing";
}
