/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const AccountReferenceModelStage: core.serialization.Schema<
    serializers.AccountReferenceModelStage.Raw,
    ButtonclikrApi.AccountReferenceModelStage
> = core.serialization.enum_(["accessToken", "accountToken", "clientUserId"]);

export declare namespace AccountReferenceModelStage {
    type Raw = "accessToken" | "accountToken" | "clientUserId";
}