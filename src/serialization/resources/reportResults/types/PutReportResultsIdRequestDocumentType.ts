/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutReportResultsIdRequestDocumentType: core.serialization.Schema<
    serializers.PutReportResultsIdRequestDocumentType.Raw,
    ButtonclikrApi.PutReportResultsIdRequestDocumentType
> = core.serialization.enum_(["json", "xml", "soap"]);

export declare namespace PutReportResultsIdRequestDocumentType {
    type Raw = "json" | "xml" | "soap";
}
