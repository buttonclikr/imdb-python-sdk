/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This field indicates the batch close method for this merchant applicable to Express platform.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `TimeInitiated` - **Batch close occurs at specific time intervals. (Automated.)**
 *
 * - `MerchantInitiated` - **Batch close occurs when initiated by the Merchant. (Manual.)**
 *
 * </details>
 */
export type PostMerchantsRequestExpressBatchCloseMethod = "TimeInitiated" | "MerchantInitiated";

export const PostMerchantsRequestExpressBatchCloseMethod = {
    TimeInitiated: "TimeInitiated",
    MerchantInitiated: "MerchantInitiated",
} as const;
