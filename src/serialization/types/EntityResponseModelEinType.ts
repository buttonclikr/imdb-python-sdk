/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const EntityResponseModelEinType: core.serialization.Schema<
    serializers.EntityResponseModelEinType.Raw,
    ButtonclikrApi.EntityResponseModelEinType
> = core.serialization.enum_(["ssn", "tin", "other"]);

export declare namespace EntityResponseModelEinType {
    type Raw = "ssn" | "tin" | "other";
}