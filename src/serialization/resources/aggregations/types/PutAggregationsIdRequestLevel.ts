/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutAggregationsIdRequestLevel: core.serialization.Schema<
    serializers.PutAggregationsIdRequestLevel.Raw,
    ButtonclikrApi.PutAggregationsIdRequestLevel
> = core.serialization.enum_(["admin", "division", "merchant", "partition"]);

export declare namespace PutAggregationsIdRequestLevel {
    type Raw = "admin" | "division" | "merchant" | "partition";
}