/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Reason for copying Transaction referenced in fromtxn field.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `resubmission` - **Resubmission**
 *
 * - `reauthorization` - **Reauthorization**
 * </details>
 */
export type TxnsPostReqBodySchemaModelCopyReason = "resubmission" | "reauthorization";

export const TxnsPostReqBodySchemaModelCopyReason = {
    Resubmission: "resubmission",
    Reauthorization: "reauthorization",
} as const;
