/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         expand: "string",
 *         unmask: "string",
 *         pageNumber: "string",
 *         pageLimit: "string"
 *     }
 */
export interface GetAlertsRequest {
    /**
     * Set this path parameter to retrieve nested objects and return them as part of the response.
     * The parameter name that you specify determines the resources to return.
     * For example, set '?expand[login][]' to return a nested login resource.
     */
    expand: string;
    /**
     * Set this path parameter to retrieve unmasked details in the response.
     * The fields specified will be returned in full. Only works for single-record requests.
     */
    unmask: string;
    /**
     * Set this path parameter to request a specific page of records.
     * For example, set '?page[number]=2' to retrieve the second page of records for this request.
     */
    pageNumber: string;
    /**
     * Set this path parameter to request up to a specific amount of records. By default 30 records are retrieved per page. The maximum limit that can be set is 100.
     * For example, set '?page[limit]=50' to retrieve up to 50 records for this request.
     */
    pageLimit: string;
}
