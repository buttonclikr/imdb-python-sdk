/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Payments {
    interface Options {
        environment?: core.Supplier<environments.ButtonclikrApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

/**
 * Pay for bookings using a card or bank account, and view payment
 * status and history.
 *
 * > warn
 * > Bookings usually expire within 1 hour so you'll need to make your payment
 * > before the expiry date
 *
 */
export class Payments {
    constructor(protected readonly _options: Payments.Options) {}

    /**
     * A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.
     *
     * @param {string} bookingId - The ID of the booking to pay for.
     * @param {ButtonclikrApi.BookingPayment} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     * @throws {@link ButtonclikrApi.UnauthorizedError}
     * @throws {@link ButtonclikrApi.ForbiddenError}
     * @throws {@link ButtonclikrApi.TooManyRequestsError}
     * @throws {@link ButtonclikrApi.InternalServerError}
     *
     * @example
     *     await client.payments.createBookingPayment("1725ff48-ab45-4bb5-9d02-88745177dedb", {})
     */
    public async createBookingPayment(
        bookingId: string,
        request: ButtonclikrApi.BookingPayment,
        requestOptions?: Payments.RequestOptions
    ): Promise<ButtonclikrApi.CreateBookingPaymentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.ButtonclikrApiEnvironment.Production,
                `bookings/${encodeURIComponent(bookingId)}/payment`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BookingPayment.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateBookingPaymentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(
                        serializers.Problem.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new ButtonclikrApi.UnauthorizedError(
                        serializers.Problem.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new ButtonclikrApi.ForbiddenError(
                        serializers.Problem.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new ButtonclikrApi.TooManyRequestsError(
                        serializers.Problem.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new ButtonclikrApi.InternalServerError(
                        serializers.Problem.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}