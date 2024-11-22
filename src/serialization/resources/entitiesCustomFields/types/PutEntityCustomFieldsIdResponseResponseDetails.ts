/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutEntityCustomFieldsIdResponseResponseDetailsPage } from "./PutEntityCustomFieldsIdResponseResponseDetailsPage";

export const PutEntityCustomFieldsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutEntityCustomFieldsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutEntityCustomFieldsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutEntityCustomFieldsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutEntityCustomFieldsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutEntityCustomFieldsIdResponseResponseDetailsPage.Raw | null;
    }
}
