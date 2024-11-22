/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetLoginsResponseResponseDetailsPage } from "./GetLoginsResponseResponseDetailsPage";

export const GetLoginsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetLoginsResponseResponseDetails.Raw,
    ButtonclikrApi.GetLoginsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetLoginsResponseResponseDetailsPage.optional(),
});

export declare namespace GetLoginsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetLoginsResponseResponseDetailsPage.Raw | null;
    }
}
