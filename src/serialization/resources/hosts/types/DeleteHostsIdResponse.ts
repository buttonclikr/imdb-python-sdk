/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteHostsIdResponseResponse } from "./DeleteHostsIdResponseResponse";

export const DeleteHostsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteHostsIdResponse.Raw,
    ButtonclikrApi.DeleteHostsIdResponse
> = core.serialization.object({
    response: DeleteHostsIdResponseResponse.optional(),
});

export declare namespace DeleteHostsIdResponse {
    interface Raw {
        response?: DeleteHostsIdResponseResponse.Raw | null;
    }
}