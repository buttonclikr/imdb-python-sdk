/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutTeamLoginsIdRequestCreate: core.serialization.Schema<
    serializers.PutTeamLoginsIdRequestCreate.Raw,
    ButtonclikrApi.PutTeamLoginsIdRequestCreate
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutTeamLoginsIdRequestCreate {
    type Raw = "0" | "1";
}