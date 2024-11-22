/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const PostMappingsRequest: core.serialization.Schema<
    serializers.PostMappingsRequest.Raw,
    ButtonclikrApi.PostMappingsRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    name: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    input: core.serialization.unknown().optional(),
    output: core.serialization.unknown().optional(),
    namespace: core.serialization.unknown().optional(),
});

export declare namespace PostMappingsRequest {
    interface Raw {
        login?: unknown;
        name?: unknown | null;
        description?: unknown | null;
        input?: unknown | null;
        output?: unknown | null;
        namespace?: unknown | null;
    }
}