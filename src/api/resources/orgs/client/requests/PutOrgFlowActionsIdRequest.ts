/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         orgFlow: {
 *             "key": "value"
 *         },
 *         org: {
 *             "key": "value"
 *         },
 *         action: ButtonclikrApi.PutOrgFlowActionsIdRequestAction.Add
 *     }
 */
export interface PutOrgFlowActionsIdRequest {
    orgFlow?: unknown;
    org?: unknown;
    /**
     * The action to take in relation to the Entity being processed is add/remove.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `add`  - Add the referenced Entity to the referenced Org.
     * - `remove`  - Remove the referenced Entity from the referenced Org.
     *
     * </details>
     */
    action: ButtonclikrApi.PutOrgFlowActionsIdRequestAction;
}
