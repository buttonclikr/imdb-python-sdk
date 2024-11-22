/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutSettlementsIdResponseResponseDetailsPage } from "./PutSettlementsIdResponseResponseDetailsPage";

export const PutSettlementsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutSettlementsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutSettlementsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutSettlementsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutSettlementsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutSettlementsIdResponseResponseDetailsPage.Raw | null;
    }
}
