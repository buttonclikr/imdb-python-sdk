/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutFeesIdRequestCollection: core.serialization.Schema<
    serializers.PutFeesIdRequestCollection.Raw,
    ButtonclikrApi.PutFeesIdRequestCollection
> = core.serialization.enum_(["1", "2", "3"]);

export declare namespace PutFeesIdRequestCollection {
    type Raw = "1" | "2" | "3";
}
