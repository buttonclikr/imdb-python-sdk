/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostConfigurationStagesRequestExtension: core.serialization.Schema<
    serializers.PostConfigurationStagesRequestExtension.Raw,
    ButtonclikrApi.PostConfigurationStagesRequestExtension
> = core.serialization.enum_([
    "jpg",
    "jpeg",
    "gif",
    "png",
    "pdf",
    "tif",
    "tiff",
    "txt",
    "xml",
    "asc",
    "rtf",
    "csv",
    "xls",
    "doc",
    "odt",
    "ods",
    "json",
    "soap",
]);

export declare namespace PostConfigurationStagesRequestExtension {
    type Raw =
        | "jpg"
        | "jpeg"
        | "gif"
        | "png"
        | "pdf"
        | "tif"
        | "tiff"
        | "txt"
        | "xml"
        | "asc"
        | "rtf"
        | "csv"
        | "xls"
        | "doc"
        | "odt"
        | "ods"
        | "json"
        | "soap";
}