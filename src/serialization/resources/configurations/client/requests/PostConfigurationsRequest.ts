/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostConfigurationsRequestIntegration } from "../../types/PostConfigurationsRequestIntegration";
import { PostConfigurationsRequestName } from "../../types/PostConfigurationsRequestName";
import { PostConfigurationsRequestType } from "../../types/PostConfigurationsRequestType";
import { PostConfigurationsRequestInactive } from "../../types/PostConfigurationsRequestInactive";
import { PostConfigurationsRequestFrozen } from "../../types/PostConfigurationsRequestFrozen";

export const PostConfigurationsRequest: core.serialization.Schema<
    serializers.PostConfigurationsRequest.Raw,
    ButtonclikrApi.PostConfigurationsRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    entity: core.serialization.unknown().optional(),
    division: core.serialization.unknown().optional(),
    org: core.serialization.unknown().optional(),
    partition: core.serialization.unknown().optional(),
    integration: PostConfigurationsRequestIntegration,
    name: PostConfigurationsRequestName,
    type: PostConfigurationsRequestType,
    options: core.serialization.unknown().optional(),
    inactive: PostConfigurationsRequestInactive,
    frozen: PostConfigurationsRequestFrozen,
});

export declare namespace PostConfigurationsRequest {
    interface Raw {
        login?: unknown;
        entity?: unknown | null;
        division?: unknown | null;
        org?: unknown | null;
        partition?: unknown | null;
        integration: PostConfigurationsRequestIntegration.Raw;
        name: PostConfigurationsRequestName.Raw;
        type: PostConfigurationsRequestType.Raw;
        options?: unknown | null;
        inactive: PostConfigurationsRequestInactive.Raw;
        frozen: PostConfigurationsRequestFrozen.Raw;
    }
}