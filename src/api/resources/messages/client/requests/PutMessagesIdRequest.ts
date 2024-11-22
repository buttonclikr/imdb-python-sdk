/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         messageThread: {
 *             "key": "value"
 *         },
 *         opposingMessage: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PutMessagesIdRequestType.Incoming,
 *         generated: "string",
 *         secure: "string",
 *         read: "string",
 *         message: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PutMessagesIdRequest {
    messageThread?: unknown;
    opposingMessage?: unknown;
    /**
     * Whether this resource is incoming or outgoing whether this resource is incoming or outgoing.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `incoming`  - Incoming messages is assigned.
     * - `outgoing`  - Outgoing message is assigned.
     *
     * </details>
     */
    type: ButtonclikrApi.PutMessagesIdRequestType;
    /** Whether this resource was automatically generated or not, whether this resource was automatically generated or not. */
    generated: string;
    /** Whether this resource is marked as secure whether this resource is marked as secure. */
    secure: string;
    /** Whether this resource is marked as read or not. */
    read: string;
    message?: unknown;
}