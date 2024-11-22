/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Whether this resource is marked as frozen.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `0` - **Not Frozen**
 *
 * - `1` - **Frozen**
 * </details>
 */
export type PostSecretsRequestFrozen = "0" | "1";

export const PostSecretsRequestFrozen = {
    Zero: "0",
    One: "1",
} as const;
