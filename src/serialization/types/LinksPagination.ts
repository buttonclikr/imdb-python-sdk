/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const LinksPagination: core.serialization.ObjectSchema<
    serializers.LinksPagination.Raw,
    ButtonclikrApi.LinksPagination
> = core.serialization.object({
    next: core.serialization.string().optional(),
    prev: core.serialization.string().optional(),
});

export declare namespace LinksPagination {
    interface Raw {
        next?: string | null;
        prev?: string | null;
    }
}
