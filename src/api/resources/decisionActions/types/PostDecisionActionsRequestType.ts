/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of DecisionAction
 */
export type PostDecisionActionsRequestType = "equal" | "notEqual" | "contains" | "greater" | "less";

export const PostDecisionActionsRequestType = {
    Equal: "equal",
    NotEqual: "notEqual",
    Contains: "contains",
    Greater: "greater",
    Less: "less",
} as const;