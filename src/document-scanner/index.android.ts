import { Application } from '@nativescript/core';
let getDocumentScan;
let currentDocumentScanner: com.websitebeaver.documentscanner.DocumentScanner;
Application.on(Application.launchEvent, () => {
    const activity = Application.android.startActivity;
    getDocumentScan = activity.registerForActivityResult(
        new androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult(),
        new androidx.activity.result.ActivityResultCallback({
            onActivityResult: (result) => {
                currentDocumentScanner.handleDocumentScanIntentResult(result);
                currentDocumentScanner = null;
            }
        })
    );
});
declare let kotlin;
export class DocumentScanner {
    mNative: com.websitebeaver.documentscanner.DocumentScanner;
    resolve;
    reject;
    successHandler: kotlin.jvm.functions.Function1;
    errorHandler: kotlin.jvm.functions.Function1;
    cancelHandler: kotlin.jvm.functions.Function0;
    constructor({
        responseType,
        flashMode = 0,
        maxNumSimultaneousDocuments = 1,
        showColorFilters = false,
        letUserAdjustCrop = true,
        autoFocus = true,
        maxNumDocuments = 4,
        croppedImageQuality = 100
    }: {
        flashMode?: number;
        maxNumSimultaneousDocuments?: number;
        responseType?: string;
        showColorFilters?: boolean;
        autoFocus?: boolean;
        letUserAdjustCrop?: boolean;
        maxNumDocuments?: number;
        croppedImageQuality?: number;
    } = {}) {
        const activity = Application.android.startActivity;
        this.successHandler = new kotlin.jvm.functions.Function1({
            invoke: (croppedImageResults: java.util.ArrayList<string>) => {
                const result = [];
                for (let index = 0; index < croppedImageResults.size(); index++) {
                    result.push(croppedImageResults.get(index));
                }
                console.log('result', result);
                this.resolve?.(result);
            }
        });
        this.errorHandler = new kotlin.jvm.functions.Function1({
            invoke: (errorMessage) => {
                console.log('documentscannerlogs', errorMessage);
                this.reject?.(errorMessage);
            }
        });
        this.cancelHandler = new kotlin.jvm.functions.Function0({
            invoke: () => {
                console.log('documentscannerlogs', 'User canceled document scan');
                this.reject?.();
            }
        });
        this.mNative = new com.websitebeaver.documentscanner.DocumentScanner(
            activity,
            this.successHandler,
            this.errorHandler,
            this.cancelHandler,
            responseType,
            new java.lang.Boolean(letUserAdjustCrop),
            new java.lang.Integer(flashMode),
            new java.lang.Boolean(autoFocus),
            new java.lang.Boolean(showColorFilters),
            new java.lang.Integer(maxNumDocuments),
            new java.lang.Integer(maxNumSimultaneousDocuments),
            new java.lang.Integer(croppedImageQuality),
            null,
            getDocumentScan
        );
    }

    startScan() {
        return new Promise((resolve, reject) => {
            try {
                this.resolve = resolve;
                this.reject = reject;
                currentDocumentScanner = this.mNative;
                getDocumentScan.launch(this.mNative.createDocumentScanIntent());
            } catch (error) {
                reject(error);
            }
        });
    }
    clean() {
        this.mNative = null;
        this.successHandler = null;
        this.errorHandler = null;
        this.cancelHandler = null;
    }
}
