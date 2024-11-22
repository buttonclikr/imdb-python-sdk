/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace AlertActions {
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

/**
 * Alert Actions deals with specific action that occurs following a triggered web alert.
 */
export class AlertActions {
    constructor(protected readonly _options: AlertActions.Options) {}

    /**
     * Query an alertAction; An alertAction resource represents a particular instance of an Alert that is sent out through one particular channel, for example, SMS, mobile application notification, or email, each alertAction being associated with an Alert resource.
     *
     * @param {string} id - The ID of this resource and The Alert Action ID.
     * @param {ButtonclikrApi.GetAlertActionsIdRequest} request
     * @param {AlertActions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.alertActions.getAlertActionsId("id")
     */
    public async getAlertActionsId(
        id: string,
        request: ButtonclikrApi.GetAlertActionsIdRequest = {},
        requestOptions?: AlertActions.RequestOptions
    ): Promise<ButtonclikrApi.GetAlertActionsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (unmask != null) {
            _queryParams["unmask"] = unmask;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `alertActions/${encodeURIComponent(id)}`
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
            return serializers.GetAlertActionsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Update an alertAction representing a particular instance of an Alert that is sent out through one particular channel, for example, SMS, mobile application notification, or email, each being associated with an Alert resource.
     *
     * @param {string} id - The ID of this resource and The Alert Action ID.
     * @param {ButtonclikrApi.UpdateAlertActionsRequestBodySchema} request
     * @param {AlertActions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.alertActions.putAlertActionsId("id", {
     *         alert: "alert",
     *         options: "options",
     *         value: "value",
     *         maxAttemptsTempDisabled: 1,
     *         inactive: 1,
     *         frozen: 1
     *     })
     */
    public async putAlertActionsId(
        id: string,
        request: ButtonclikrApi.UpdateAlertActionsRequestBodySchema,
        requestOptions?: AlertActions.RequestOptions
    ): Promise<ButtonclikrApi.PutAlertActionsIdResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `alertActions/${encodeURIComponent(id)}`
            ),
            method: "PUT",
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
            requestType: "json",
            body: serializers.UpdateAlertActionsRequestBodySchema.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PutAlertActionsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Delete an alertAction TBD.
     *
     * @param {string} id - The ID of this resource and The Alert Action ID.
     * @param {ButtonclikrApi.DeleteAlertActionsIdRequest} request
     * @param {AlertActions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.alertActions.deleteAlertActionsId("id")
     */
    public async deleteAlertActionsId(
        id: string,
        request: ButtonclikrApi.DeleteAlertActionsIdRequest = {},
        requestOptions?: AlertActions.RequestOptions
    ): Promise<ButtonclikrApi.DeleteAlertActionsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (unmask != null) {
            _queryParams["unmask"] = unmask;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `alertActions/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
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
            return serializers.DeleteAlertActionsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Query an alertAction representing a particular instance of an Alert that is sent out through one particular channel. For example, SMS, mobile application notification, or email, each being associated with an Alert resource.
     *
     * @param {ButtonclikrApi.GetAlertActionsRequest} request
     * @param {AlertActions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.alertActions.getAlertActions()
     */
    public async getAlertActions(
        request: ButtonclikrApi.GetAlertActionsRequest = {},
        requestOptions?: AlertActions.RequestOptions
    ): Promise<ButtonclikrApi.GetAlertActionsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (unmask != null) {
            _queryParams["unmask"] = unmask;
        }

        if (pageNumber != null) {
            _queryParams["page[number]"] = pageNumber.toString();
        }

        if (pageLimit != null) {
            _queryParams["page[limit]"] = pageLimit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "alertActions"
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
            return serializers.GetAlertActionsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Create an alertAction, which represents a particular instance of an Alert sent out through one particular channel, such as SMS, mobile application notification, or email, and each alertAction is associated with an Alert resource.
     *
     * @param {ButtonclikrApi.CreateNewAlertActionSchema} request
     * @param {AlertActions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.alertActions.postAlertActions({
     *         alert: "alert",
     *         type: ButtonclikrApi.CreateNewAlertActionSchemaType.Email,
     *         options: "options",
     *         value: "value",
     *         maxAttemptsTempDisabled: 1,
     *         inactive: 1,
     *         frozen: 1
     *     })
     */
    public async postAlertActions(
        request: ButtonclikrApi.CreateNewAlertActionSchema,
        requestOptions?: AlertActions.RequestOptions
    ): Promise<ButtonclikrApi.PostAlertActionsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "alertActions"
            ),
            method: "POST",
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
            requestType: "json",
            body: serializers.CreateNewAlertActionSchema.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostAlertActionsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
