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
export type PostSubscriptionsRequestInactive = "0" | "1";

export const PostSubscriptionsRequestInactive = {
    Zero: "0",
    One: "1",
} as const;
