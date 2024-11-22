/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostNotesRequestType } from "../../types/PostNotesRequestType";
import { PostNotesRequestInactive } from "../../types/PostNotesRequestInactive";
import { PostNotesRequestFrozen } from "../../types/PostNotesRequestFrozen";

export const PostNotesRequest: core.serialization.Schema<
    serializers.PostNotesRequest.Raw,
    ButtonclikrApi.PostNotesRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    txn: core.serialization.unknown().optional(),
    terminalTxn: core.serialization.unknown().optional(),
    hold: core.serialization.unknown().optional(),
    entity: core.serialization.unknown().optional(),
    type: PostNotesRequestType,
    data: core.serialization.unknown(),
    note: core.serialization.unknown().optional(),
    inactive: PostNotesRequestInactive,
    frozen: PostNotesRequestFrozen,
});

export declare namespace PostNotesRequest {
    interface Raw {
        login?: unknown;
        txn?: unknown | null;
        terminalTxn?: unknown | null;
        hold?: unknown | null;
        entity?: unknown | null;
        type: PostNotesRequestType.Raw;
        data?: unknown;
        note?: unknown | null;
        inactive: PostNotesRequestInactive.Raw;
        frozen: PostNotesRequestFrozen.Raw;
    }
}
