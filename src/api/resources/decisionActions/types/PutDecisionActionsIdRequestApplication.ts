/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Where the action defined by this DecisionAction should apply
 */
export type PutDecisionActionsIdRequestApplication = "account" | "txn" | "entity";

export const PutDecisionActionsIdRequestApplication = {
    Account: "account",
    Txn: "txn",
    Entity: "entity",
} as const;
