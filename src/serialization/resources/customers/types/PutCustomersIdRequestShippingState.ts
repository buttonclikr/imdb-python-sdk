/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutCustomersIdRequestShippingState: core.serialization.Schema<
    serializers.PutCustomersIdRequestShippingState.Raw,
    ButtonclikrApi.PutCustomersIdRequestShippingState
> = core.serialization.enum_(["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "PE", "QC", "SK", "YT"]);

export declare namespace PutCustomersIdRequestShippingState {
    type Raw = "AB" | "BC" | "MB" | "NB" | "NL" | "NT" | "NS" | "NU" | "PE" | "QC" | "SK" | "YT";
}
