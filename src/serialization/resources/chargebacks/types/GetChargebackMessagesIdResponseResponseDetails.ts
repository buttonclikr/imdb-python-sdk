/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessagesIdResponseResponseDetailsPage } from "./GetChargebackMessagesIdResponseResponseDetailsPage";

export const GetChargebackMessagesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackMessagesIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetChargebackMessagesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackMessagesIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetChargebackMessagesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackMessagesIdResponseResponseDetailsPage.Raw | null;
    }
}