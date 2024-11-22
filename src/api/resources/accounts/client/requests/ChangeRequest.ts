/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         login: "login",
 *         status: ButtonclikrApi.ChangeRequestStatus.Pending,
 *         reasonType: "reasonType",
 *         reason: "reason"
 *     }
 */
export interface ChangeRequest {
    /** In case resource is deleted, this field will then show the date it occurred */
    deleted?: Date;
    /** The identifier of the Login associated with this ChangeRequest. */
    login: string;
    /** Auth Type that originate the request. */
    authType?: string;
    /** The status of the requested change. */
    status: ButtonclikrApi.ChangeRequestStatus;
    /** A type which categorizes the reason. */
    reasonType: string;
    /** The reason in case the change was declined. */
    reason: string;
    /** The id of the model, only set when operation is update */
    recordId?: string;
    /** The person who review the request. */
    analyst?: string;
    /** If the change request was reviewed, this field will then show the date it occurred */
    reviewed?: Date;
}
