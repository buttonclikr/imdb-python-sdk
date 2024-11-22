/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostValueAddedServicesRequestServiceName } from "../../types/PostValueAddedServicesRequestServiceName";
import { PostValueAddedServicesRequestIsEnabled } from "../../types/PostValueAddedServicesRequestIsEnabled";
import { PostValueAddedServicesRequestPlatform } from "../../types/PostValueAddedServicesRequestPlatform";
import { PostValueAddedServicesRequestInactive } from "../../types/PostValueAddedServicesRequestInactive";
import { PostValueAddedServicesRequestFrozen } from "../../types/PostValueAddedServicesRequestFrozen";

export const PostValueAddedServicesRequest: core.serialization.Schema<
    serializers.PostValueAddedServicesRequest.Raw,
    ButtonclikrApi.PostValueAddedServicesRequest
> = core.serialization.object({
    entity: core.serialization.unknown(),
    serviceName: PostValueAddedServicesRequestServiceName,
    isEnabled: PostValueAddedServicesRequestIsEnabled,
    status: core.serialization.unknown().optional(),
    additionalInformation: core.serialization.unknown().optional(),
    platform: PostValueAddedServicesRequestPlatform,
    enablementDate: core.serialization.unknown().optional(),
    valueAddedServicesFlow: core.serialization.unknown().optional(),
    pciNonValidationFeeEnabled: core.serialization.unknown().optional(),
    inactive: PostValueAddedServicesRequestInactive,
    frozen: PostValueAddedServicesRequestFrozen,
});

export declare namespace PostValueAddedServicesRequest {
    interface Raw {
        entity?: unknown;
        serviceName: PostValueAddedServicesRequestServiceName.Raw;
        isEnabled: PostValueAddedServicesRequestIsEnabled.Raw;
        status?: unknown | null;
        additionalInformation?: unknown | null;
        platform: PostValueAddedServicesRequestPlatform.Raw;
        enablementDate?: unknown | null;
        valueAddedServicesFlow?: unknown | null;
        pciNonValidationFeeEnabled?: unknown | null;
        inactive: PostValueAddedServicesRequestInactive.Raw;
        frozen: PostValueAddedServicesRequestFrozen.Raw;
    }
}
