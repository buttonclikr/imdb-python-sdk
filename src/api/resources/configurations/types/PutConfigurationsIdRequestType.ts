/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of configuration resource.
 */
export type PutConfigurationsIdRequestType = "create" | "read" | "update" | "delete";

export const PutConfigurationsIdRequestType = {
    Create: "create",
    Read: "read",
    Update: "update",
    Delete: "delete",
} as const;