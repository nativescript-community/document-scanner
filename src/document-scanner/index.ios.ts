import { Application } from '@nativescript/core';

@NativeClass
class VNDocumentCameraViewControllerDelegateImpl extends NSObject implements VNDocumentCameraViewControllerDelegate {
    static ObjCProtocols = [VNDocumentCameraViewControllerDelegate];
    resolve;
    reject;
    public static initWithResolveReject(resolve, reject): VNDocumentCameraViewControllerDelegateImpl {
        const delegate = VNDocumentCameraViewControllerDelegateImpl.new() as VNDocumentCameraViewControllerDelegateImpl;
        delegate.resolve = resolve;
        delegate.reject = reject;

        return delegate;
    }
    documentCameraViewControllerDidCancel(controller: VNDocumentCameraViewController): void {
        this.reject?.();
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }
    documentCameraViewControllerDidFailWithError(controller: VNDocumentCameraViewController, error: NSError): void {
        this.reject?.(error);
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }
    documentCameraViewControllerDidFinishWithScan(controller: VNDocumentCameraViewController, scan: VNDocumentCameraScan): void {
        const result = [];
        for (let index = 0; index < scan.pageCount; index++) {
            result.push(scan.imageOfPageAtIndex(index));
        }
        this.resolve?.(result);
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }
}
export class DocumentScanner {
    resolve;
    reject;
    constructor(
        private options: {
            responseType?;
            letUserAdjustCrop?;
            maxNumDocuments?;
            croppedImageQuality?;
        }
    ) {}

    async startScan() {
        let controller;
        let delegate;
        try {
            const result = await new Promise((resolve, reject) => {
                try {
                    if (!VNDocumentCameraViewController.supported) {
                        throw new Error('VisionKit not supported on this device');
                    }
                    controller = VNDocumentCameraViewController.new();
                    delegate = controller.delegate = VNDocumentCameraViewControllerDelegateImpl.initWithResolveReject(resolve, reject);
                    Application.ios.rootController.presentViewControllerAnimatedCompletion(controller, true, null);
                    this.resolve = resolve;
                    this.reject = reject;
                } catch (error) {
                    reject(error);
                }
            });
            return result;
        } catch (error) {
            throw error;
        } finally {
            controller.delegate = null;
            controller = null;
            delegate = null;
        }
    }
    clean() {}
}
