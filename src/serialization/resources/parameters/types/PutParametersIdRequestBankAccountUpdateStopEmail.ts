/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutParametersIdRequestBankAccountUpdateStopEmail: core.serialization.Schema<
    serializers.PutParametersIdRequestBankAccountUpdateStopEmail.Raw,
    ButtonclikrApi.PutParametersIdRequestBankAccountUpdateStopEmail
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutParametersIdRequestBankAccountUpdateStopEmail {
    type Raw = "0" | "1";
}
