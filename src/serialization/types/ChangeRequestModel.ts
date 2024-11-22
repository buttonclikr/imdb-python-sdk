/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";
import { Id } from "./Id";
import { Created } from "./Created";
import { Modified } from "./Modified";
import { Creator } from "./Creator";
import { Modifier } from "./Modifier";
import { ChangeRequestModelOperation } from "./ChangeRequestModelOperation";
import { ChangeRequestModelStatus } from "./ChangeRequestModelStatus";

export const ChangeRequestModel: core.serialization.ObjectSchema<
    serializers.ChangeRequestModel.Raw,
    ButtonclikrApi.ChangeRequestModel
> = core.serialization.object({
    id: Id.optional(),
    created: Created.optional(),
    modified: Modified.optional(),
    creator: Creator.optional(),
    modifier: Modifier.optional(),
    deleted: core.serialization.date().optional(),
    login: core.serialization.string().optional(),
    authType: core.serialization.string().optional(),
    operation: ChangeRequestModelOperation.optional(),
    status: ChangeRequestModelStatus.optional(),
    reasonType: core.serialization.string().optional(),
    reason: core.serialization.string().optional(),
    changes: core.serialization.string().optional(),
    model: core.serialization.string().optional(),
    recordId: core.serialization.string().optional(),
    entity: core.serialization.string().optional(),
    analyst: core.serialization.string().optional(),
    reviewed: core.serialization.date().optional(),
});

export declare namespace ChangeRequestModel {
    interface Raw {
        id?: Id.Raw | null;
        created?: Created.Raw | null;
        modified?: Modified.Raw | null;
        creator?: Creator.Raw | null;
        modifier?: Modifier.Raw | null;
        deleted?: string | null;
        login?: string | null;
        authType?: string | null;
        operation?: ChangeRequestModelOperation.Raw | null;
        status?: ChangeRequestModelStatus.Raw | null;
        reasonType?: string | null;
        reason?: string | null;
        changes?: string | null;
        model?: string | null;
        recordId?: string | null;
        entity?: string | null;
        analyst?: string | null;
        reviewed?: string | null;
    }
}
