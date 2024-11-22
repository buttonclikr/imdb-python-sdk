/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const EntityResponseModelCheckStage: core.serialization.Schema<
    serializers.EntityResponseModelCheckStage.Raw,
    ButtonclikrApi.EntityResponseModelCheckStage
> = core.serialization.enum_([
    "createEntity",
    "underwriting",
    "preboard",
    "postboard",
    "txn",
    "txnVolume",
    "payout",
    "payoutVolume",
]);

export declare namespace EntityResponseModelCheckStage {
    type Raw =
        | "createEntity"
        | "underwriting"
        | "preboard"
        | "postboard"
        | "txn"
        | "txnVolume"
        | "payout"
        | "payoutVolume";
}
