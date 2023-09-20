export class DocumentScanner {
    constructor({ responseType, letUserAdjustCrop, maxNumDocuments, croppedImageQuality }?: { responseType?; letUserAdjustCrop?; maxNumDocuments?; croppedImageQuality? });
    startScan(): Promise<any>;
}
