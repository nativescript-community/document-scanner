import { Application } from '@nativescript/core';
let getDocumentScan;
let currentDocumentScanner: com.websitebeaver.documentscanner.DocumentScanner;
Application.on(Application.launchEvent, () => {
    const activity = Application.android.startActivity as androidx.appcompat.app.AppCompatActivity;
    console.log('on lauch', activity);
    getDocumentScan = activity.registerForActivityResult(
        new androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult(),
        new androidx.activity.result.ActivityResultCallback({
            onActivityResult: (result) => {
                console.log('onActivityResult', result);
                currentDocumentScanner.handleDocumentScanIntentResult(result);
                currentDocumentScanner = null;
            }
        })
    );
});
export class DocumentScanner {
    mNative: com.websitebeaver.documentscanner.DocumentScanner;
    resolve;
    reject;
    constructor({
        responseType = com.websitebeaver.documentscanner.constants.ResponseType.IMAGE_FILE_PATH,
        letUserAdjustCrop = true,
        maxNumDocuments,
        croppedImageQuality
    }: {
        responseType?;
        letUserAdjustCrop?;
        maxNumDocuments?;
        croppedImageQuality?;
    }) {
        const activity = Application.android.startActivity as androidx.appcompat.app.AppCompatActivity;
        this.mNative = new com.websitebeaver.documentscanner.DocumentScanner(
            activity,
            //@ts-ignore
            new kotlin.jvm.functions.Function1({
                invoke: (croppedImageResults) => {
                    console.log('croppedImageResults', croppedImageResults);
                    this.resolve?.(croppedImageResults);
                }
            }),
            //@ts-ignore
            new kotlin.jvm.functions.Function1({
                invoke: (errorMessage) => {
                    console.log('documentscannerlogs', errorMessage);
                    this.reject?.(errorMessage);
                }
            }),
            //@ts-ignore
            new kotlin.jvm.functions.Function0({
                invoke: () => {
                    console.log('documentscannerlogs', 'User canceled document scan');
                    this.reject?.();
                }
            }),
            responseType,
            letUserAdjustCrop,
            maxNumDocuments,
            croppedImageQuality
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
    }
}
