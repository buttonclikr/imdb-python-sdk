/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostSubscriptionTokensRequestInactive: core.serialization.Schema<
    serializers.PostSubscriptionTokensRequestInactive.Raw,
    ButtonclikrApi.PostSubscriptionTokensRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostSubscriptionTokensRequestInactive {
    type Raw = "0" | "1";
}
