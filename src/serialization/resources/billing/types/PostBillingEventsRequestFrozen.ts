/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostBillingEventsRequestFrozen: core.serialization.Schema<
    serializers.PostBillingEventsRequestFrozen.Raw,
    ButtonclikrApi.PostBillingEventsRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostBillingEventsRequestFrozen {
    type Raw = "0" | "1";
}
