/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An indicator showing what this terminalTxnRef refers to.\
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `activation` - **Terminal Activation**
 *
 * - `auth` - \*_Transaction Authorization_
 *
 * - `draft` - **Transaction Draft Number**
 *
 * - `file` - **Import File Ref**
 *
 * - `retrieval` - **Transaction Retrieval Number**
 *
 *  </details>
 */
export type PostTerminalTxnRefsRequestStage = "activation" | "auth" | "draft" | "file" | "retrieval";

export const PostTerminalTxnRefsRequestStage = {
    Activation: "activation",
    Auth: "auth",
    Draft: "draft",
    File: "file",
    Retrieval: "retrieval",
} as const;