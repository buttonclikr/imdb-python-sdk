/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutEntityRefsIdRequestStaging: core.serialization.Schema<
    serializers.PutEntityRefsIdRequestStaging.Raw,
    ButtonclikrApi.PutEntityRefsIdRequestStaging
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutEntityRefsIdRequestStaging {
    type Raw = "0" | "1";
}
