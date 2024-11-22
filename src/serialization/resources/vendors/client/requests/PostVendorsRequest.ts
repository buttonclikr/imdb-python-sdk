/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostVendorsRequestInactive } from "../../types/PostVendorsRequestInactive";
import { PostVendorsRequestFrozen } from "../../types/PostVendorsRequestFrozen";

export const PostVendorsRequest: core.serialization.Schema<
    serializers.PostVendorsRequest.Raw,
    ButtonclikrApi.PostVendorsRequest
> = core.serialization.object({
    entity: core.serialization.unknown(),
    division: core.serialization.unknown().optional(),
    inactive: PostVendorsRequestInactive,
    frozen: PostVendorsRequestFrozen,
});

export declare namespace PostVendorsRequest {
    interface Raw {
        entity?: unknown;
        division?: unknown | null;
        inactive: PostVendorsRequestInactive.Raw;
        frozen: PostVendorsRequestFrozen.Raw;
    }
}
