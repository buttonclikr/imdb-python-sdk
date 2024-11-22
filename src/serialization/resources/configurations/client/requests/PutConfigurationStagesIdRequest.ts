/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutConfigurationStagesIdRequestName } from "../../types/PutConfigurationStagesIdRequestName";
import { PutConfigurationStagesIdRequestMethod } from "../../types/PutConfigurationStagesIdRequestMethod";
import { PutConfigurationStagesIdRequestInput } from "../../types/PutConfigurationStagesIdRequestInput";
import { PutConfigurationStagesIdRequestOutput } from "../../types/PutConfigurationStagesIdRequestOutput";
import { PutConfigurationStagesIdRequestCredential } from "../../types/PutConfigurationStagesIdRequestCredential";
import { PutConfigurationStagesIdRequestExtension } from "../../types/PutConfigurationStagesIdRequestExtension";
import { PutConfigurationStagesIdRequestInactive } from "../../types/PutConfigurationStagesIdRequestInactive";
import { PutConfigurationStagesIdRequestFrozen } from "../../types/PutConfigurationStagesIdRequestFrozen";

export const PutConfigurationStagesIdRequest: core.serialization.Schema<
    serializers.PutConfigurationStagesIdRequest.Raw,
    ButtonclikrApi.PutConfigurationStagesIdRequest
> = core.serialization.object({
    configuration: core.serialization.unknown(),
    name: PutConfigurationStagesIdRequestName,
    method: PutConfigurationStagesIdRequestMethod,
    sequence: core.serialization.unknown().optional(),
    input: PutConfigurationStagesIdRequestInput,
    output: PutConfigurationStagesIdRequestOutput,
    credential: PutConfigurationStagesIdRequestCredential.optional(),
    url: core.serialization.unknown(),
    dir: core.serialization.unknown().optional(),
    restId: core.serialization.unknown().optional(),
    mapToData: core.serialization.unknown().optional(),
    file: core.serialization.unknown().optional(),
    filter: core.serialization.unknown().optional(),
    extension: PutConfigurationStagesIdRequestExtension.optional(),
    namespace: core.serialization.unknown().optional(),
    dynamicStage: core.serialization.unknown().optional(),
    curlOptions: core.serialization.unknown().optional(),
    headers: core.serialization.unknown().optional(),
    inactive: PutConfigurationStagesIdRequestInactive,
    frozen: PutConfigurationStagesIdRequestFrozen,
});

export declare namespace PutConfigurationStagesIdRequest {
    interface Raw {
        configuration?: unknown;
        name: PutConfigurationStagesIdRequestName.Raw;
        method: PutConfigurationStagesIdRequestMethod.Raw;
        sequence?: unknown | null;
        input: PutConfigurationStagesIdRequestInput.Raw;
        output: PutConfigurationStagesIdRequestOutput.Raw;
        credential?: PutConfigurationStagesIdRequestCredential.Raw | null;
        url?: unknown;
        dir?: unknown | null;
        restId?: unknown | null;
        mapToData?: unknown | null;
        file?: unknown | null;
        filter?: unknown | null;
        extension?: PutConfigurationStagesIdRequestExtension.Raw | null;
        namespace?: unknown | null;
        dynamicStage?: unknown | null;
        curlOptions?: unknown | null;
        headers?: unknown | null;
        inactive: PutConfigurationStagesIdRequestInactive.Raw;
        frozen: PutConfigurationStagesIdRequestFrozen.Raw;
    }
}
