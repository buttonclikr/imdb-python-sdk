/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutTokensIdResponseDetailsPage } from "./PutTokensIdResponseDetailsPage";

export const PutTokensIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutTokensIdResponseDetails.Raw,
    ButtonclikrApi.PutTokensIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutTokensIdResponseDetailsPage.optional(),
});

export declare namespace PutTokensIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutTokensIdResponseDetailsPage.Raw | null;
    }
}