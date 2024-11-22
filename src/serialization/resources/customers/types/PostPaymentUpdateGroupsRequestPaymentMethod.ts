/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostPaymentUpdateGroupsRequestPaymentMethod: core.serialization.Schema<
    serializers.PostPaymentUpdateGroupsRequestPaymentMethod.Raw,
    ButtonclikrApi.PostPaymentUpdateGroupsRequestPaymentMethod
> = core.serialization.enum_(["1", "2", "3", "4", "5", "8", "9", "10", "11"]);

export declare namespace PostPaymentUpdateGroupsRequestPaymentMethod {
    type Raw = "1" | "2" | "3" | "4" | "5" | "8" | "9" | "10" | "11";
}