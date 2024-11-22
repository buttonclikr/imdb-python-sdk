/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFeesIdResponseResponseDetailsPage } from "./PutFeesIdResponseResponseDetailsPage";

export const PutFeesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutFeesIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutFeesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutFeesIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutFeesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutFeesIdResponseResponseDetailsPage.Raw | null;
    }
}
