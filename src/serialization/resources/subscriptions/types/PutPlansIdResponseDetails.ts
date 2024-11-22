/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPlansIdResponseDetailsPage } from "./PutPlansIdResponseDetailsPage";

export const PutPlansIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutPlansIdResponseDetails.Raw,
    ButtonclikrApi.PutPlansIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutPlansIdResponseDetailsPage.optional(),
});

export declare namespace PutPlansIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutPlansIdResponseDetailsPage.Raw | null;
    }
}