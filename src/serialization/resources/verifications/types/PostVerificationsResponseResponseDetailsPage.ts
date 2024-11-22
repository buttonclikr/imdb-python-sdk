/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostVerificationsResponseResponseDetailsPage: core.serialization.ObjectSchema<
    serializers.PostVerificationsResponseResponseDetailsPage.Raw,
    ButtonclikrApi.PostVerificationsResponseResponseDetailsPage
> = core.serialization.object({
    current: core.serialization.unknown().optional(),
    last: core.serialization.unknown().optional(),
});

export declare namespace PostVerificationsResponseResponseDetailsPage {
    interface Raw {
        current?: unknown | null;
        last?: unknown | null;
    }
}
