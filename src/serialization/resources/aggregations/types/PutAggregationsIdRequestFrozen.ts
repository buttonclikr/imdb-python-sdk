/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutAggregationsIdRequestFrozen: core.serialization.Schema<
    serializers.PutAggregationsIdRequestFrozen.Raw,
    ButtonclikrApi.PutAggregationsIdRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutAggregationsIdRequestFrozen {
    type Raw = "0" | "1";
}