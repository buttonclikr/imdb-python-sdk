/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the file that holds this chargebackDocument. The value is set when the file is properly integrated, otherwise it will be null. Valid Values: `jpg` - JPG file, `jpeg` - JPEG file, `gif` - GIF file, `png` - PNG file, `pdf` - PDF file, `tiff` - TIFF file, `tif` - TIF file.
 */
export type PostChargebackDocumentsRequestType = "jpg" | "jpeg" | "gif" | "png" | "pdf" | "tiff" | "tif";

export const PostChargebackDocumentsRequestType = {
    Jpg: "jpg",
    Jpeg: "jpeg",
    Gif: "gif",
    Png: "png",
    Pdf: "pdf",
    Tiff: "tiff",
    Tif: "tif",
} as const;
