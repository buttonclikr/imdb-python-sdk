/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutMessagesIdRequestType } from "../../types/PutMessagesIdRequestType";

export const PutMessagesIdRequest: core.serialization.Schema<
    serializers.PutMessagesIdRequest.Raw,
    ButtonclikrApi.PutMessagesIdRequest
> = core.serialization.object({
    messageThread: core.serialization.unknown(),
    opposingMessage: core.serialization.unknown().optional(),
    type: PutMessagesIdRequestType,
    generated: core.serialization.string(),
    secure: core.serialization.string(),
    read: core.serialization.string(),
    message: core.serialization.unknown(),
});

export declare namespace PutMessagesIdRequest {
    interface Raw {
        messageThread?: unknown;
        opposingMessage?: unknown | null;
        type: PutMessagesIdRequestType.Raw;
        generated: string;
        secure: string;
        read: string;
        message?: unknown;
    }
}