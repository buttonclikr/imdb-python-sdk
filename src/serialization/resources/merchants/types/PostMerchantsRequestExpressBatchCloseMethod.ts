/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostMerchantsRequestExpressBatchCloseMethod: core.serialization.Schema<
    serializers.PostMerchantsRequestExpressBatchCloseMethod.Raw,
    ButtonclikrApi.PostMerchantsRequestExpressBatchCloseMethod
> = core.serialization.enum_(["TimeInitiated", "MerchantInitiated"]);

export declare namespace PostMerchantsRequestExpressBatchCloseMethod {
    type Raw = "TimeInitiated" | "MerchantInitiated";
}
