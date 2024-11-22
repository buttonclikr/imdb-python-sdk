/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateAccountVerificationRequestBodySchemaType: core.serialization.Schema<
    serializers.CreateAccountVerificationRequestBodySchemaType.Raw,
    ButtonclikrApi.CreateAccountVerificationRequestBodySchemaType
> = core.serialization.enum_(["debit", "credential"]);

export declare namespace CreateAccountVerificationRequestBodySchemaType {
    type Raw = "debit" | "credential";
}
