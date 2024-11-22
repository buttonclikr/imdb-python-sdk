/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostWatchlistItemsRequestType: core.serialization.Schema<
    serializers.PostWatchlistItemsRequestType.Raw,
    ButtonclikrApi.PostWatchlistItemsRequestType
> = core.serialization.enum_(["entity", "member", "entityMember", "txn"]);

export declare namespace PostWatchlistItemsRequestType {
    type Raw = "entity" | "member" | "entityMember" | "txn";
}
