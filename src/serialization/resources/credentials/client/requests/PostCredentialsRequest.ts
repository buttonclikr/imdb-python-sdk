/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostCredentialsRequestIntegration } from "../../types/PostCredentialsRequestIntegration";
import { PostCredentialsRequestType } from "../../types/PostCredentialsRequestType";
import { PostCredentialsRequestInactive } from "../../types/PostCredentialsRequestInactive";
import { PostCredentialsRequestFrozen } from "../../types/PostCredentialsRequestFrozen";

export const PostCredentialsRequest: core.serialization.Schema<
    serializers.PostCredentialsRequest.Raw,
    ButtonclikrApi.PostCredentialsRequest
> = core.serialization.object({
    entity: core.serialization.unknown(),
    name: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    username: core.serialization.unknown(),
    password: core.serialization.unknown().optional(),
    connectUsername: core.serialization.unknown().optional(),
    connectPassword: core.serialization.unknown().optional(),
    integration: PostCredentialsRequestIntegration,
    type: PostCredentialsRequestType,
    secret: core.serialization.unknown().optional(),
    inactive: PostCredentialsRequestInactive,
    frozen: PostCredentialsRequestFrozen,
});

export declare namespace PostCredentialsRequest {
    interface Raw {
        entity?: unknown;
        name?: unknown | null;
        description?: unknown | null;
        username?: unknown;
        password?: unknown | null;
        connectUsername?: unknown | null;
        connectPassword?: unknown | null;
        integration: PostCredentialsRequestIntegration.Raw;
        type: PostCredentialsRequestType.Raw;
        secret?: unknown | null;
        inactive: PostCredentialsRequestInactive.Raw;
        frozen: PostCredentialsRequestFrozen.Raw;
    }
}