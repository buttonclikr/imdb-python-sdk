/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The state associated with this Transaction.
 * If in the U.S. this is specified as the 2 character postal abbreviation for the state, if outside of the U.S. the full state name.
 * This field is stored as a text string and must be between 2 and 100 characters long.
 */
export type TxnsPostReqBodySchemaModelState =
    | "AB"
    | "BC"
    | "MB"
    | "NB"
    | "NL"
    | "NT"
    | "NS"
    | "NU"
    | "true"
    | "PE"
    | "QC"
    | "SK"
    | "YT"
    | "IA"
    | "ID"
    | "IL"
    | "IN"
    | "KN"
    | "KS"
    | "LA"
    | "MA"
    | "MD"
    | "ME"
    | "MI"
    | "MN"
    | "MO"
    | "MS"
    | "MT"
    | "NC"
    | "ND"
    | "NE"
    | "NH"
    | "NJ"
    | "NM"
    | "NV"
    | "NY"
    | "OH"
    | "OK"
    | "OR"
    | "PA"
    | "RI"
    | "SC"
    | "SD"
    | "TN"
    | "TX"
    | "UT"
    | "VA"
    | "VT"
    | "WA"
    | "WI"
    | "WV"
    | "WY";

export const TxnsPostReqBodySchemaModelState = {
    Ab: "AB",
    Bc: "BC",
    Mb: "MB",
    Nb: "NB",
    Nl: "NL",
    Nt: "NT",
    Ns: "NS",
    Nu: "NU",
    True: "true",
    Pe: "PE",
    Qc: "QC",
    Sk: "SK",
    Yt: "YT",
    Ia: "IA",
    Id: "ID",
    Il: "IL",
    In: "IN",
    Kn: "KN",
    Ks: "KS",
    La: "LA",
    Ma: "MA",
    Md: "MD",
    Me: "ME",
    Mi: "MI",
    Mn: "MN",
    Mo: "MO",
    Ms: "MS",
    Mt: "MT",
    Nc: "NC",
    Nd: "ND",
    Ne: "NE",
    Nh: "NH",
    Nj: "NJ",
    Nm: "NM",
    Nv: "NV",
    Ny: "NY",
    Oh: "OH",
    Ok: "OK",
    Or: "OR",
    Pa: "PA",
    Ri: "RI",
    Sc: "SC",
    Sd: "SD",
    Tn: "TN",
    Tx: "TX",
    Ut: "UT",
    Va: "VA",
    Vt: "VT",
    Wa: "WA",
    Wi: "WI",
    Wv: "WV",
    Wy: "WY",
} as const;
