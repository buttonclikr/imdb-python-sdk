/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostTeamsRequestAutoCascadeDisabled } from "../../types/PostTeamsRequestAutoCascadeDisabled";
import { PostTeamsRequestAutoCascadeOwner } from "../../types/PostTeamsRequestAutoCascadeOwner";
import { PostTeamsRequestInactive } from "../../types/PostTeamsRequestInactive";
import { PostTeamsRequestFrozen } from "../../types/PostTeamsRequestFrozen";

export const PostTeamsRequest: core.serialization.Schema<
    serializers.PostTeamsRequest.Raw,
    ButtonclikrApi.PostTeamsRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    name: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    autoCascadeDisabled: PostTeamsRequestAutoCascadeDisabled,
    autoCascadeOwner: PostTeamsRequestAutoCascadeOwner,
    inactive: PostTeamsRequestInactive,
    frozen: PostTeamsRequestFrozen,
});

export declare namespace PostTeamsRequest {
    interface Raw {
        login?: unknown;
        name?: unknown | null;
        description?: unknown | null;
        autoCascadeDisabled: PostTeamsRequestAutoCascadeDisabled.Raw;
        autoCascadeOwner: PostTeamsRequestAutoCascadeOwner.Raw;
        inactive: PostTeamsRequestInactive.Raw;
        frozen: PostTeamsRequestFrozen.Raw;
    }
}