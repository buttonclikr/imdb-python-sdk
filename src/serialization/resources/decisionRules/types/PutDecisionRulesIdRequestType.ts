/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutDecisionRulesIdRequestType: core.serialization.Schema<
    serializers.PutDecisionRulesIdRequestType.Raw,
    ButtonclikrApi.PutDecisionRulesIdRequestType
> = core.serialization.enum_([
    "less",
    "equal",
    "notEqual",
    "greater",
    "swiped",
    "signed",
    "type",
    "origin",
    "method",
    "cvvResult",
    "avsResult",
    "3dsResult",
    "related",
    "relatedDelay",
    "relatedFloor",
    "relatedCeil",
    "mcc",
    "merchantCountry",
    "issuerCountry",
    "international",
    "platform",
    "methodType",
    "emv",
    "misuse",
    "bin",
    "primary",
    "fundingCurrencyEqual",
    "fundingCurrencyNotEqual",
    "fundingCurrencyMismatch",
    "settledCurrencyMismatch",
    "imported",
    "subscription",
    "publicAuth",
    "clientIp",
    "debtRepayment",
]);

export declare namespace PutDecisionRulesIdRequestType {
    type Raw =
        | "less"
        | "equal"
        | "notEqual"
        | "greater"
        | "swiped"
        | "signed"
        | "type"
        | "origin"
        | "method"
        | "cvvResult"
        | "avsResult"
        | "3dsResult"
        | "related"
        | "relatedDelay"
        | "relatedFloor"
        | "relatedCeil"
        | "mcc"
        | "merchantCountry"
        | "issuerCountry"
        | "international"
        | "platform"
        | "methodType"
        | "emv"
        | "misuse"
        | "bin"
        | "primary"
        | "fundingCurrencyEqual"
        | "fundingCurrencyNotEqual"
        | "fundingCurrencyMismatch"
        | "settledCurrencyMismatch"
        | "imported"
        | "subscription"
        | "publicAuth"
        | "clientIp"
        | "debtRepayment";
}