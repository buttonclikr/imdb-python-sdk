/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const MerchantResponseModelExpressBatchCloseMethod: core.serialization.Schema<
    serializers.MerchantResponseModelExpressBatchCloseMethod.Raw,
    ButtonclikrApi.MerchantResponseModelExpressBatchCloseMethod
> = core.serialization.enum_(["TimeInitiated", "MerchantInitiated"]);

export declare namespace MerchantResponseModelExpressBatchCloseMethod {
    type Raw = "TimeInitiated" | "MerchantInitiated";
}