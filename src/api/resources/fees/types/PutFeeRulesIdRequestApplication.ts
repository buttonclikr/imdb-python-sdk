/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Where the feeRule should apply both.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `both` - **Both.** The rule should apply to the fee and to the calculation of collections.
 *
 * - `fee` - **Fee.** The rule should apply only to the fee itself.
 *
 * - `collection` - **Collection.** The fee should be only used when calculating a collection.
 *
 * </details>
 */
export type PutFeeRulesIdRequestApplication = "both" | "fee" | "collection";

export const PutFeeRulesIdRequestApplication = {
    Both: "both",
    Fee: "fee",
    Collection: "collection",
} as const;