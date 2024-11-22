/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         order: {
 *             "key": "value"
 *         },
 *         txnDescription: {
 *             "key": "value"
 *         },
 *         descriptor: {
 *             "key": "value"
 *         },
 *         authentication: {
 *             "key": "value"
 *         },
 *         authenticationId: {
 *             "key": "value"
 *         },
 *         failures: {
 *             "key": "value"
 *         },
 *         finish: {
 *             "key": "value"
 *         },
 *         firstTxn: {
 *             "key": "value"
 *         },
 *         maxFailures: {
 *             "key": "value"
 *         },
 *         origin: "string",
 *         statementEntity: {
 *             "key": "value"
 *         },
 *         start: {
 *             "key": "value"
 *         },
 *         tax: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutSubscriptionsIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutSubscriptionsIdRequestFrozen.Zero
 *     }
 */
export interface PutSubscriptionsIdRequest {
    order?: unknown;
    txnDescription?: unknown;
    descriptor?: unknown;
    authentication?: unknown;
    authenticationId?: unknown;
    failures?: unknown;
    finish?: unknown;
    firstTxn?: unknown;
    maxFailures?: unknown;
    /** The origin of the Txn that will be created through this Subscription originated with Apple Pay. */
    origin: string;
    statementEntity?: unknown;
    start?: unknown;
    tax?: unknown;
    /** Whether this resource is marked as inactive or not, whether it's active or inactive. */
    inactive: ButtonclikrApi.PutSubscriptionsIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutSubscriptionsIdRequestFrozen;
}
