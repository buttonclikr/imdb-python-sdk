/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The report data format type.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `json` - **JSON data format.**
 *
 * - `xml` - **XML data format.**
 *
 * - `soap` - **SOAP data format.**
 * </details>
 */
export type PutReportsIdRequestType = "json" | "xml" | "soap";

export const PutReportsIdRequestType = {
    Json: "json",
    Xml: "xml",
    Soap: "soap",
} as const;
