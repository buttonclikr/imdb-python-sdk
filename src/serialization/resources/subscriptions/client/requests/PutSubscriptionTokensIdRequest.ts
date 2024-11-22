/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutSubscriptionTokensIdRequestInactive } from "../../types/PutSubscriptionTokensIdRequestInactive";
import { PutSubscriptionTokensIdRequestFrozen } from "../../types/PutSubscriptionTokensIdRequestFrozen";

export const PutSubscriptionTokensIdRequest: core.serialization.Schema<
    serializers.PutSubscriptionTokensIdRequest.Raw,
    ButtonclikrApi.PutSubscriptionTokensIdRequest
> = core.serialization.object({
    token: core.serialization.unknown(),
    inactive: PutSubscriptionTokensIdRequestInactive,
    frozen: PutSubscriptionTokensIdRequestFrozen,
});

export declare namespace PutSubscriptionTokensIdRequest {
    interface Raw {
        token?: unknown;
        inactive: PutSubscriptionTokensIdRequestInactive.Raw;
        frozen: PutSubscriptionTokensIdRequestFrozen.Raw;
    }
}
