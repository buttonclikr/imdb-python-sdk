/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Whether this billing collection is calculated based on the entity's current amount.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `0` - **Do not include current balance.**
 *
 * - `1` - **Include current balance.**
 * </details>
 */
export type PutBillingsIdRequestCollectionIncludeCurrent = "0" | "1";

export const PutBillingsIdRequestCollectionIncludeCurrent = {
    Zero: "0",
    One: "1",
} as const;