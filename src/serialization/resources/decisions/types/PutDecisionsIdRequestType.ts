/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutDecisionsIdRequestType: core.serialization.Schema<
    serializers.PutDecisionsIdRequestType.Raw,
    ButtonclikrApi.PutDecisionsIdRequestType
> = core.serialization.enum_([
    "merchantFailureLimit",
    "merchantFailureRatio",
    "saleTotalLimit",
    "refundTotalLimit",
    "averageSaleCountLimit",
    "merchantRefundSaleRatio",
    "merchantPaymentSuccessLimit",
    "ipFailureLimit",
    "ipFailureRatio",
    "inactiveMerchant",
    "merchantPaymentFailureLimit",
    "merchantCaptureWithoutAuthLimit",
    "refundWithoutSale",
    "refundWithoutSaleLimit",
    "captureAboveAuthLimit",
    "fraudScore",
    "cvv",
    "avs",
    "aavs",
    "duplicateTxn",
    "merchantMatch",
    "currencyConversion",
    "settledCurrencyMismatch",
    "initialTxn",
    "similarTotalLimit",
    "similarTotalRatio",
    "saleTotalMinimum",
    "limit",
    "ratio",
    "txnWatchlist",
    "balanceRefundLimit",
]);

export declare namespace PutDecisionsIdRequestType {
    type Raw =
        | "merchantFailureLimit"
        | "merchantFailureRatio"
        | "saleTotalLimit"
        | "refundTotalLimit"
        | "averageSaleCountLimit"
        | "merchantRefundSaleRatio"
        | "merchantPaymentSuccessLimit"
        | "ipFailureLimit"
        | "ipFailureRatio"
        | "inactiveMerchant"
        | "merchantPaymentFailureLimit"
        | "merchantCaptureWithoutAuthLimit"
        | "refundWithoutSale"
        | "refundWithoutSaleLimit"
        | "captureAboveAuthLimit"
        | "fraudScore"
        | "cvv"
        | "avs"
        | "aavs"
        | "duplicateTxn"
        | "merchantMatch"
        | "currencyConversion"
        | "settledCurrencyMismatch"
        | "initialTxn"
        | "similarTotalLimit"
        | "similarTotalRatio"
        | "saleTotalMinimum"
        | "limit"
        | "ratio"
        | "txnWatchlist"
        | "balanceRefundLimit";
}