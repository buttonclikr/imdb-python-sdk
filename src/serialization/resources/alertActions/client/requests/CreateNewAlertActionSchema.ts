/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { CreateNewAlertActionSchemaType } from "../../types/CreateNewAlertActionSchemaType";
import { Inactive } from "../../../../types/Inactive";
import { Frozen } from "../../../../types/Frozen";

export const CreateNewAlertActionSchema: core.serialization.Schema<
    serializers.CreateNewAlertActionSchema.Raw,
    ButtonclikrApi.CreateNewAlertActionSchema
> = core.serialization.object({
    alert: core.serialization.string(),
    headerName: core.serialization.string().optional(),
    headerValue: core.serialization.string().optional(),
    type: CreateNewAlertActionSchemaType,
    options: core.serialization.string(),
    value: core.serialization.string(),
    retries: core.serialization.number().optional(),
    maxAttemptsTempDisabled: core.serialization.number(),
    inactive: Inactive,
    frozen: Frozen,
});

export declare namespace CreateNewAlertActionSchema {
    interface Raw {
        alert: string;
        headerName?: string | null;
        headerValue?: string | null;
        type: CreateNewAlertActionSchemaType.Raw;
        options: string;
        value: string;
        retries?: number | null;
        maxAttemptsTempDisabled: number;
        inactive: Inactive.Raw;
        frozen: Frozen.Raw;
    }
}