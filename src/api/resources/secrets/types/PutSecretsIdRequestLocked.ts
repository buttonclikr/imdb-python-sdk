/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Whether this secret is locked or not, if it is locked then the value of this type of secret will prevail.
 */
export type PutSecretsIdRequestLocked = "0" | "1";

export const PutSecretsIdRequestLocked = {
    Zero: "0",
    One: "1",
} as const;