/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutEntitiesIdRequestEinType: core.serialization.Schema<
    serializers.PutEntitiesIdRequestEinType.Raw,
    ButtonclikrApi.PutEntitiesIdRequestEinType
> = core.serialization.enum_(["ssn", "tin", "other"]);

export declare namespace PutEntitiesIdRequestEinType {
    type Raw = "ssn" | "tin" | "other";
}
