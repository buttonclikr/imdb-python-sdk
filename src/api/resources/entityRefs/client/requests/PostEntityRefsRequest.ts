/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         entity: "entity",
 *         member: "member",
 *         ref: "ref",
 *         stage: ButtonclikrApi.PostEntityRefsRequestStage.AmexCharge,
 *         staging: ButtonclikrApi.PostEntityRefsRequestStaging.Zero,
 *         platform: ButtonclikrApi.PostEntityRefsRequestPlatform.Apple,
 *         default: 1,
 *         inactive: 1,
 *         frozen: 1
 *     }
 */
export interface PostEntityRefsRequest {
    /** The identifier of the Entity that owns this entityRefs resource. */
    entity: string;
    /** The identifier of the Member associated with this entityRefs resource. Default value is 'null' */
    member: string;
    entityRoute?: string;
    /**
     * The reference code itself.
     * This field is stored as a text string and must be between 0 and 50 characters long.
     */
    ref: string;
    /** An indicator showing what this terminalRef refers to. Valid Values: `create` - Terminal Creation, `pid` - Platform ID, `tid` - Terminal ID, `token` - Token ID, `ctid` - TBD. */
    stage: ButtonclikrApi.PostEntityRefsRequestStage;
    /** Allows a merchant to transact under the Staging environment while boarding is in progress, and allows for configuration with valid values such as **Disabled** or **Enabled**. */
    staging: ButtonclikrApi.PostEntityRefsRequestStaging;
    /** The platform that issued this entityRef, used to process this Disbursement. */
    platform: ButtonclikrApi.PostEntityRefsRequestPlatform;
    /** The currency this entityRef is allowed to make transactions/payouts with, or the currency for which this entityRef's resource was funded on. This field is optional and there is no currency restriction for the EntityRef if it's not set. */
    currency?: ButtonclikrApi.PostEntityRefsRequestCurrency;
    /** The currency for which this entityRefs resource was funded on. */
    fundingCurrency?: ButtonclikrApi.PostEntityRefsRequestFundingCurrency;
    /** Whether this entityRef is the default one. Default entityRefs will have priority when processing transactions with no MID or Platform set. Valid Values: `0` - Not default, `1` - Default. */
    default: number;
    fbo?: string;
    options?: string;
    inactive: ButtonclikrApi.Inactive;
    frozen: ButtonclikrApi.Frozen;
}
