/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutEntityRefsIdResponseDetailsPage } from "./PutEntityRefsIdResponseDetailsPage";

export const PutEntityRefsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutEntityRefsIdResponseDetails.Raw,
    ButtonclikrApi.PutEntityRefsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutEntityRefsIdResponseDetailsPage.optional(),
});

export declare namespace PutEntityRefsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutEntityRefsIdResponseDetailsPage.Raw | null;
    }
}
