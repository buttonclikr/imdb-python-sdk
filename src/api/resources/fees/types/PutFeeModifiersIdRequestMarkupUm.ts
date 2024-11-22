/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The unit of measure for the markup amount for the Fee.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `1` - **Fixed Amount.** Specified in the 'markupAmount' field as an integer in cents.
 *
 * - `2` - **Percentage** Specified in the 'markupAmount' field in basis points.
 *
 * - `3` - **TBD**
 *
 * </details>
 */
export type PutFeeModifiersIdRequestMarkupUm = "1" | "2" | "3";

export const PutFeeModifiersIdRequestMarkupUm = {
    One: "1",
    Two: "2",
    Three: "3",
} as const;
