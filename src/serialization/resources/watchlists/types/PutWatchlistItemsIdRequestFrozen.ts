/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutWatchlistItemsIdRequestFrozen: core.serialization.Schema<
    serializers.PutWatchlistItemsIdRequestFrozen.Raw,
    ButtonclikrApi.PutWatchlistItemsIdRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutWatchlistItemsIdRequestFrozen {
    type Raw = "0" | "1";
}
