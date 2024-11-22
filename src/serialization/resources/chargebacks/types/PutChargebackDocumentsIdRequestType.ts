/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutChargebackDocumentsIdRequestType: core.serialization.Schema<
    serializers.PutChargebackDocumentsIdRequestType.Raw,
    ButtonclikrApi.PutChargebackDocumentsIdRequestType
> = core.serialization.enum_(["jpg", "jpeg", "gif", "png", "pdf", "tiff", "tif"]);

export declare namespace PutChargebackDocumentsIdRequestType {
    type Raw = "jpg" | "jpeg" | "gif" | "png" | "pdf" | "tiff" | "tif";
}
