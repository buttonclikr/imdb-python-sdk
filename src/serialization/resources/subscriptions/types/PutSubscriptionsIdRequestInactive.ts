/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutSubscriptionsIdRequestInactive: core.serialization.Schema<
    serializers.PutSubscriptionsIdRequestInactive.Raw,
    ButtonclikrApi.PutSubscriptionsIdRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutSubscriptionsIdRequestInactive {
    type Raw = "0" | "1";
}
