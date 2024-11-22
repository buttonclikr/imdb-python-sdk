/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAuditLogsResponseResponseDetails } from "./GetAuditLogsResponseResponseDetails";

export const GetAuditLogsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetAuditLogsResponseResponse.Raw,
    ButtonclikrApi.GetAuditLogsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetAuditLogsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAuditLogsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetAuditLogsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
