/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface ChangeRequestModel {
    id?: ButtonclikrApi.Id;
    created?: ButtonclikrApi.Created;
    modified?: ButtonclikrApi.Modified;
    creator?: ButtonclikrApi.Creator;
    modifier?: ButtonclikrApi.Modifier;
    /** In case resource is deleted, this field will then show the date it occurred */
    deleted?: Date;
    /** The identifier of the Login associated with this ChangeRequest. */
    login?: string;
    /** Auth Type that originate the request. */
    authType?: string;
    /** The operation being performed on the resource. */
    operation?: ButtonclikrApi.ChangeRequestModelOperation;
    /** The status of the requested change. */
    status?: ButtonclikrApi.ChangeRequestModelStatus;
    /** A type which categorizes the reason. */
    reasonType?: string;
    /** The reason in case the change was declined. */
    reason?: string;
    /** A JSON encoded string with the request payload */
    changes?: string;
    /** The model being changed. */
    model?: string;
    /** The id of the model, only set when operation is update */
    recordId?: string;
    /** The identifier of the Entity associated with this Account. */
    entity?: string;
    /** The person who review the request. */
    analyst?: string;
    /** If this change request was reviewed */
    reviewed?: Date;
}
