/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutProfitShareRulesIdRequestType: core.serialization.Schema<
    serializers.PutProfitShareRulesIdRequestType.Raw,
    ButtonclikrApi.PutProfitShareRulesIdRequestType
> = core.serialization.enum_([
    "less",
    "equal",
    "notEqual",
    "greater",
    "event",
    "notEvent",
    "fee",
    "notFee",
    "fromentity",
    "notFromentity",
]);

export declare namespace PutProfitShareRulesIdRequestType {
    type Raw =
        | "less"
        | "equal"
        | "notEqual"
        | "greater"
        | "event"
        | "notEvent"
        | "fee"
        | "notFee"
        | "fromentity"
        | "notFromentity";
}