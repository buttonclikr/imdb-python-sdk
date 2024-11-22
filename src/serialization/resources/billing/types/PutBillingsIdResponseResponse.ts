/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBillingsIdResponseResponseDetails } from "./PutBillingsIdResponseResponseDetails";

export const PutBillingsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutBillingsIdResponseResponse.Raw,
    ButtonclikrApi.PutBillingsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutBillingsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutBillingsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutBillingsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}