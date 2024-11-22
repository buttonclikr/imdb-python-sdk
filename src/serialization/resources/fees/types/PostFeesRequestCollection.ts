/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostFeesRequestCollection: core.serialization.Schema<
    serializers.PostFeesRequestCollection.Raw,
    ButtonclikrApi.PostFeesRequestCollection
> = core.serialization.enum_(["1", "2", "3"]);

export declare namespace PostFeesRequestCollection {
    type Raw = "1" | "2" | "3";
}