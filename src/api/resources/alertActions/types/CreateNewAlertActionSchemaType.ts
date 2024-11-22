/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The medium used to deliver the Alert. Valid Values: `email` - Deliver the Alert to an email address, `web` - Deliver the Alert through a web site notification, `app` - Deliver the Alert through a mobile application notification, `sms` - Deliver the Alert through an SMS message to a mobile device.
 */
export type CreateNewAlertActionSchemaType = "email" | "web" | "app" | "sms";

export const CreateNewAlertActionSchemaType = {
    Email: "email",
    Web: "web",
    App: "app",
    Sms: "sms",
} as const;