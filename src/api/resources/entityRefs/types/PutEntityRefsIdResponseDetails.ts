/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../index";

/**
 * An object describing the response, including the request ID and pagination indicators.
 */
export interface PutEntityRefsIdResponseDetails {
    requestId?: unknown;
    /**
     * Where the response lists multiple resources, the API splits the response into several 'pages'.
     * This object indicates the current and last available pages in the list.
     */
    page?: ButtonclikrApi.PutEntityRefsIdResponseDetailsPage;
}
