/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostMfaRecoveryCodesRequestUsed: core.serialization.Schema<
    serializers.PostMfaRecoveryCodesRequestUsed.Raw,
    ButtonclikrApi.PostMfaRecoveryCodesRequestUsed
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostMfaRecoveryCodesRequestUsed {
    type Raw = "0" | "1";
}