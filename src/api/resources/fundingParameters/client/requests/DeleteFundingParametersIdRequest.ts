/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         expand: "string",
 *         unmask: "string"
 *     }
 */
export interface DeleteFundingParametersIdRequest {
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
}
