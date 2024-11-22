/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TxnsModelType: core.serialization.Schema<serializers.TxnsModelType.Raw, ButtonclikrApi.TxnsModelType> =
    core.serialization.enum_(["1", "2", "3", "4", "5", "7", "8", "11", "12"]);

export declare namespace TxnsModelType {
    type Raw = "1" | "2" | "3" | "4" | "5" | "7" | "8" | "11" | "12";
}
