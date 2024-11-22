/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace AuditLogs {
    interface Options {
        environment?: core.Supplier<environments.ButtonclikrApiEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the search header */
        search?: core.Supplier<string | undefined>;
        /** Override the SESSIONKEY header */
        sessionkey: core.Supplier<string>;
        /** Override the TXNSESSIONKEY header */
        txnsessionkey: core.Supplier<string>;
        /** Override the USERNAME header */
        username: core.Supplier<string>;
        /** Override the PASSWORD header */
        password: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the search header */
        search?: string | undefined;
        /** Override the SESSIONKEY header */
        sessionkey?: string;
        /** Override the TXNSESSIONKEY header */
        txnsessionkey?: string;
        /** Override the USERNAME header */
        username?: string;
        /** Override the PASSWORD header */
        password?: string;
    }
}

export class AuditLogs {
    constructor(protected readonly _options: AuditLogs.Options) {}

    /**
     * Details for query on auditLogs coming soon
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.GetAuditLogsIdRequest} request
     * @param {AuditLogs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auditLogs.getAuditLogsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getAuditLogsId(
        id: unknown,
        request: ButtonclikrApi.GetAuditLogsIdRequest,
        requestOptions?: AuditLogs.RequestOptions
    ): Promise<ButtonclikrApi.GetAuditLogsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `auditLogs/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetAuditLogsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Details for query on auditLogs coming soon
     *
     * @param {ButtonclikrApi.GetAuditLogsRequest} request
     * @param {AuditLogs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auditLogs.getAuditLogs({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getAuditLogs(
        request: ButtonclikrApi.GetAuditLogsRequest,
        requestOptions?: AuditLogs.RequestOptions
    ): Promise<ButtonclikrApi.GetAuditLogsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "auditLogs"
            ),
            method: "GET",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetAuditLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { APIKEY: apiKeyValue };
    }
}