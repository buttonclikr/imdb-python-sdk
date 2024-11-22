/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalRefsIdResponseResponseDetailsPage } from "./GetTerminalRefsIdResponseResponseDetailsPage";

export const GetTerminalRefsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTerminalRefsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetTerminalRefsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTerminalRefsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetTerminalRefsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTerminalRefsIdResponseResponseDetailsPage.Raw | null;
    }
}