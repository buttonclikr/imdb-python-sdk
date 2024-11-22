/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { Details } from "../../../types/Details";
import { Error_ } from "../../../types/Error_";
import { ErrorItem } from "../../../types/ErrorItem";

export const GetInvoicesResponseResponse: core.serialization.ObjectSchema<
    serializers.GetInvoicesResponseResponse.Raw,
    ButtonclikrApi.GetInvoicesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: Details.optional(),
    errors: Error_.optional(),
});

export declare namespace GetInvoicesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: Details.Raw | null;
        errors?: Error_.Raw | null;
    }
}