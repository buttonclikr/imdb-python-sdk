/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface QueryAccountVerificationResourceModel {
    id?: ButtonclikrApi.Id;
    created?: ButtonclikrApi.Created;
    modified?: ButtonclikrApi.Modified;
    creator?: ButtonclikrApi.Creator;
    modifier?: ButtonclikrApi.Modifier;
    /** The identifier of the accountVerification resource that this account verification result relates to. */
    accountVerification?: string;
    /** The challenge response field for this result. */
    field?: string;
    /** The challenge response result message for this result. */
    message?: string;
}