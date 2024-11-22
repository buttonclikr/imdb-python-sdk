/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDivisionsIdResponseResponseDetailsPage } from "./GetDivisionsIdResponseResponseDetailsPage";

export const GetDivisionsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetDivisionsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetDivisionsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetDivisionsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetDivisionsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetDivisionsIdResponseResponseDetailsPage.Raw | null;
    }
}
