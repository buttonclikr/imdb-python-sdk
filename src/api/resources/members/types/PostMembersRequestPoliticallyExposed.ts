/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This person is politically exposed, defined as: "persons whom through their prominent position or influence, is more susceptible to being involved in bribery or corruption."
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `0` - **Not politically exposed.**
 *
 * - `1` - **Politically exposed.**
 *
 * </details>
 */
export type PostMembersRequestPoliticallyExposed = "0" | "1";

export const PostMembersRequestPoliticallyExposed = {
    Zero: "0",
    One: "1",
} as const;
