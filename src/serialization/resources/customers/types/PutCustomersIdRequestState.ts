/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutCustomersIdRequestState: core.serialization.Schema<
    serializers.PutCustomersIdRequestState.Raw,
    ButtonclikrApi.PutCustomersIdRequestState
> = core.serialization.enum_(["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "PE", "QC", "SK", "YT"]);

export declare namespace PutCustomersIdRequestState {
    type Raw = "AB" | "BC" | "MB" | "NB" | "NL" | "NT" | "NS" | "NU" | "PE" | "QC" | "SK" | "YT";
}
