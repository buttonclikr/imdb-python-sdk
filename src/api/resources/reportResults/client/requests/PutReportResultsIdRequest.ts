/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         report: {
 *             "key": "value"
 *         },
 *         documentType: ButtonclikrApi.PutReportResultsIdRequestDocumentType.Json,
 *         status: ButtonclikrApi.PutReportResultsIdRequestStatus.Pending,
 *         effective: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutReportResultsIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutReportResultsIdRequestFrozen.Zero
 *     }
 */
export interface PutReportResultsIdRequest {
    report?: unknown;
    documentType: ButtonclikrApi.PutReportResultsIdRequestDocumentType;
    status: ButtonclikrApi.PutReportResultsIdRequestStatus;
    effective?: unknown;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PutReportResultsIdRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PutReportResultsIdRequestFrozen;
}