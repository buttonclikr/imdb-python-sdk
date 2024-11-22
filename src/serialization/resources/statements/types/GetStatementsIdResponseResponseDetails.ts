/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetStatementsIdResponseResponseDetailsPage } from "./GetStatementsIdResponseResponseDetailsPage";

export const GetStatementsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetStatementsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetStatementsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetStatementsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetStatementsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetStatementsIdResponseResponseDetailsPage.Raw | null;
    }
}