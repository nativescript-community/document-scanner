export class DocumentScanner {
    constructor({
        responseType,
        flashMode, // Android only
        maxNumSimultaneousDocuments, // Android only
        showColorFilters, // Android only
        letUserAdjustCrop, // Android only
        autoFocus, // Android only
        maxNumDocuments, // Android only
        croppedImageQuality // Android only
    }?: {
        flashMode?: number;
        maxNumSimultaneousDocuments?: number;
        responseType?: string;
        showColorFilters?: boolean;
        autoFocus?: boolean;
        letUserAdjustCrop?: boolean;
        maxNumDocuments?: number;
        croppedImageQuality?: number;
    });
    startScan(): Promise<string[] | any[]>; // on iOS UImage are returned as UIImage[]
}
