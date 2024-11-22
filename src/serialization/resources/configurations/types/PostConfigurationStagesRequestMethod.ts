/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostConfigurationStagesRequestMethod: core.serialization.Schema<
    serializers.PostConfigurationStagesRequestMethod.Raw,
    ButtonclikrApi.PostConfigurationStagesRequestMethod
> = core.serialization.enum_(["sftpUpload", "sftpDownload", "post", "get", "put", "delete", "tcp"]);

export declare namespace PostConfigurationStagesRequestMethod {
    type Raw = "sftpUpload" | "sftpDownload" | "post" | "get" | "put" | "delete" | "tcp";
}
