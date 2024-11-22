/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface AlertActionsModel {
    id?: ButtonclikrApi.Id;
    created?: ButtonclikrApi.Created;
    modified?: ButtonclikrApi.Modified;
    creator?: ButtonclikrApi.Creator;
    modifier?: ButtonclikrApi.Modifier;
    /** The medium to use to deliver this Alert.': */
    type?: ButtonclikrApi.AlertActionsModelType;
    /** When the 'type' field of this resource is set to 'web', this field determines the format that the Alert data should be sent in. */
    options?: string;
    /** A value used to deliver the alert. The field should be set to an email address if the type is email, an endpoint if the type is web, etc. */
    value?: string;
    /** The request header name for authentication to the endpoint. */
    headerName?: string;
    /** The request header value for authentication to the endpoint. */
    headerValue?: string;
    /** The number of times an alert should be resent in case of a failure. This fields can only be set for web type alertActions. */
    retries?: number;
    /**
     * Whether it was temporarily disabled for reaching maximum number of failed attempts
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Not Temporarily Disabled**
     *
     * - `1` - **Temporarily Disabled**
     * </details>
     */
    maxAttemptsTempDisabled?: number;
    inactive?: ButtonclikrApi.Inactive;
    frozen?: ButtonclikrApi.Frozen;
    /** The identifier of the Alert resource that defines this alertAction. */
    alert?: string;
}
