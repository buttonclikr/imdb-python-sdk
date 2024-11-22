/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates if the TIN being used is an EIN, SSN, or ''other/unknown'' number. Valid Values: `ssn` - Social Security Number, `tin` - Employer Identification Number, `other` - Other/Unknown TIN.
 */
export type PutEntitiesIdRequestEinType = "ssn" | "tin" | "other";

export const PutEntitiesIdRequestEinType = {
    Ssn: "ssn",
    Tin: "tin",
    Other: "other",
} as const;
