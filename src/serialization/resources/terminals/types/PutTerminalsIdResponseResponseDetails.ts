/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutTerminalsIdResponseResponseDetailsPage } from "./PutTerminalsIdResponseResponseDetailsPage";

export const PutTerminalsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutTerminalsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutTerminalsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutTerminalsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutTerminalsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutTerminalsIdResponseResponseDetailsPage.Raw | null;
    }
}
