/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetValueAddedServicesFlowsIdResponseResponseDetailsPage } from "./GetValueAddedServicesFlowsIdResponseResponseDetailsPage";

export const GetValueAddedServicesFlowsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetValueAddedServicesFlowsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetValueAddedServicesFlowsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetValueAddedServicesFlowsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetValueAddedServicesFlowsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetValueAddedServicesFlowsIdResponseResponseDetailsPage.Raw | null;
    }
}
