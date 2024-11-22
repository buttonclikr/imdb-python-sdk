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
 *         type: ButtonclikrApi.PostMessagesRequestType.Incoming,
 *         generated: "string",
 *         secure: "string",
 *         message: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PostMessagesRequest {
    messageThread?: unknown;
    opposingMessage?: unknown;
    /**
     * Whether this resource is incoming or outgoing whether this resource is incoming or outgoing.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `incoming`  - Incoming messages are assigned.
     * - `outgoing`  - Outgoing message is assigned.
     * </details>
     */
    type: ButtonclikrApi.PostMessagesRequestType;
    /**
     * Whether this resource was automatically generated or not.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - Message was auomatically generated and a value of '0' means it was manually generated.
     *
     * - `1` - Message was manually generated.
     *
     * </details>
     *
     */
    generated: string;
    /**
     * Whether this resource is marked as secure whether this resource is marked as secure.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0`  - Messages will be protected in email notifications.
     * - `1`  - Messages will be displayed entirely.
     * </details>
     */
    secure: string;
    message?: unknown;
}