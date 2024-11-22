/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         configuration: {
 *             "key": "value"
 *         },
 *         name: ButtonclikrApi.PutConfigurationStagesIdRequestName.Blank,
 *         method: ButtonclikrApi.PutConfigurationStagesIdRequestMethod.SftpUpload,
 *         sequence: {
 *             "key": "value"
 *         },
 *         input: ButtonclikrApi.PutConfigurationStagesIdRequestInput.ApplePaymentsessionRequestJson,
 *         output: ButtonclikrApi.PutConfigurationStagesIdRequestOutput.ApplePaymentsessionRequestJson,
 *         credential: ButtonclikrApi.PutConfigurationStagesIdRequestCredential.Transaction,
 *         url: {
 *             "key": "value"
 *         },
 *         dir: {
 *             "key": "value"
 *         },
 *         restId: {
 *             "key": "value"
 *         },
 *         mapToData: {
 *             "key": "value"
 *         },
 *         file: {
 *             "key": "value"
 *         },
 *         filter: {
 *             "key": "value"
 *         },
 *         extension: ButtonclikrApi.PutConfigurationStagesIdRequestExtension.Jpg,
 *         namespace: {
 *             "key": "value"
 *         },
 *         dynamicStage: {
 *             "key": "value"
 *         },
 *         curlOptions: {
 *             "key": "value"
 *         },
 *         headers: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutConfigurationStagesIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutConfigurationStagesIdRequestFrozen.Zero
 *     }
 */
export interface PutConfigurationStagesIdRequest {
    configuration?: unknown;
    /** The name of this configurationStage resource. */
    name: ButtonclikrApi.PutConfigurationStagesIdRequestName;
    /** The method used for configurationStage resource. */
    method: ButtonclikrApi.PutConfigurationStagesIdRequestMethod;
    sequence?: unknown;
    /** The input used for configurationStage resource. */
    input: ButtonclikrApi.PutConfigurationStagesIdRequestInput;
    /** The output used for configurationStage resource. */
    output: ButtonclikrApi.PutConfigurationStagesIdRequestOutput;
    /** The credential used for configurationStage resource. */
    credential?: ButtonclikrApi.PutConfigurationStagesIdRequestCredential;
    url?: unknown;
    dir?: unknown;
    restId?: unknown;
    mapToData?: unknown;
    file?: unknown;
    filter?: unknown;
    /** The extension of the file. */
    extension?: ButtonclikrApi.PutConfigurationStagesIdRequestExtension;
    namespace?: unknown;
    dynamicStage?: unknown;
    curlOptions?: unknown;
    headers?: unknown;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PutConfigurationStagesIdRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PutConfigurationStagesIdRequestFrozen;
}
