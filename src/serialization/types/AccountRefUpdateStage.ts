/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const AccountRefUpdateStage: core.serialization.Schema<
    serializers.AccountRefUpdateStage.Raw,
    ButtonclikrApi.AccountRefUpdateStage
> = core.serialization.enum_(["accessToken", "accountToken", "clientUserId"]);

export declare namespace AccountRefUpdateStage {
    type Raw = "accessToken" | "accountToken" | "clientUserId";
}