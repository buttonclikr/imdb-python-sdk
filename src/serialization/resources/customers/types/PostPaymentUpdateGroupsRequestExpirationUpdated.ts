/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostPaymentUpdateGroupsRequestExpirationUpdated: core.serialization.Schema<
    serializers.PostPaymentUpdateGroupsRequestExpirationUpdated.Raw,
    ButtonclikrApi.PostPaymentUpdateGroupsRequestExpirationUpdated
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostPaymentUpdateGroupsRequestExpirationUpdated {
    type Raw = "0" | "1";
}
