/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Whether this resource is marked as inactive.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `0` - **Active**
 *
 * - `1` - **Inactive**
 * </details>
 */
export type PutBillingModifiersIdRequestInactive = "0" | "1";

export const PutBillingModifiersIdRequestInactive = {
    Zero: "0",
    One: "1",
} as const;
