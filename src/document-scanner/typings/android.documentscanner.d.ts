/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentDetector extends java.lang.Object {
                public static class: java.lang.Class<documentscanner.DocumentDetector>;
                public constructor();
            }
            export namespace DocumentDetector {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<documentscanner.DocumentDetector.Companion>;
                    public findDocumentCorners(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): java.util.List<java.util.List<globalAndroid.graphics.Point>>;
                    public cropDocument(param0: models.Document, param1: globalAndroid.graphics.ColorFilter): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentScanner extends java.lang.Object {
                public static class: java.lang.Class<documentscanner.DocumentScanner>;
                public getMaxNumSimultaneousDocuments(): java.lang.Integer;
                public startScan(): void;
                public getCancelHandler(): any;
                public setGetContent(param0: androidx.activity.result.ActivityResultLauncher<globalAndroid.content.Intent>): void;
                public getSuccessHandler(): any;
                public getMaxNumDocuments(): java.lang.Integer;
                public setCroppedImageQuality(param0: java.lang.Integer): void;
                public getAutoFocus(): java.lang.Boolean;
                public setMaxNumDocuments(param0: java.lang.Integer): void;
                public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any, param3: any);
                public setMaxNumSimultaneousDocuments(param0: java.lang.Integer): void;
                public getLetUserAdjustCrop(): java.lang.Boolean;
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean,
                    param9: java.lang.Integer
                );
                public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any, param3: any, param4: string, param5: java.lang.Boolean);
                public getResponseType(): string;
                public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any, param3: any, param4: string);
                public createDocumentScanIntent(): globalAndroid.content.Intent;
                public getCroppedImageQuality(): java.lang.Integer;
                public getGetContent(): androidx.activity.result.ActivityResultLauncher<globalAndroid.content.Intent>;
                public handleDocumentScanIntentResult(param0: androidx.activity.result.ActivityResult): void;
                public getCustomAnalyserClass(): string;
                public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any);
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean,
                    param9: java.lang.Integer,
                    param10: java.lang.Integer,
                    param11: java.lang.Integer,
                    param12: string
                );
                public getFlashMode(): java.lang.Integer;
                public getErrorHandler(): any;
                public getShowColorFilters(): java.lang.Boolean;
                public setAutoFocus(param0: java.lang.Boolean): void;
                public setCustomAnalyserClass(param0: string): void;
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean
                );
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean,
                    param9: java.lang.Integer,
                    param10: java.lang.Integer,
                    param11: java.lang.Integer
                );
                public constructor(param0: androidx.activity.ComponentActivity, param1: any);
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean,
                    param9: java.lang.Integer,
                    param10: java.lang.Integer
                );
                public setShowColorFilters(param0: java.lang.Boolean): void;
                public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any, param3: any, param4: string, param5: java.lang.Boolean, param6: java.lang.Integer);
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean
                );
                public setFlashMode(param0: java.lang.Integer): void;
                public setLetUserAdjustCrop(param0: java.lang.Boolean): void;
                public setResponseType(param0: string): void;
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Boolean,
                    param8: java.lang.Boolean,
                    param9: java.lang.Integer,
                    param10: java.lang.Integer,
                    param11: java.lang.Integer,
                    param12: string,
                    param13: androidx.activity.result.ActivityResultLauncher<globalAndroid.content.Intent>
                );
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentScannerActivity {
                public static class: java.lang.Class<documentscanner.DocumentScannerActivity>;
                /** @deprecated */
                public onBackPressed(): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public onResume(): void;
                public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
                public onPause(): void;
                public onStop(): void;
                public onDestroy(): void;
                public constructor();
            }
            export namespace DocumentScannerActivity {
                export class WhenMappings extends java.lang.Object {
                    public static class: java.lang.Class<documentscanner.DocumentScannerActivity.WhenMappings>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class BitmapUtils extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.BitmapUtils>;
                    public static INSTANCE: cameraview.BitmapUtils;
                    public getBitmapFromContentUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
                    public getBitmap(param0: java.nio.ByteBuffer, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
                    public getBitmap(param0: androidNative.Array<number>, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
                    public getBitmap(param0: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export abstract class CameraBase extends globalAndroid.widget.FrameLayout {
                    public static class: java.lang.Class<cameraview.CameraBase>;
                    public getDisplayManager(): globalAndroid.hardware.display.DisplayManager;
                    public getMainHandler$android_document_scanner_debug(): globalAndroid.os.Handler;
                    public setPause(param0: boolean): void;
                    public getAllowExifRotation(): boolean;
                    public finalize(): void;
                    public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
                    public setMaxVideoFrameRate(param0: number): void;
                    public getAutoFocus(): boolean;
                    public resetCurrentFrame$android_document_scanner_debug(): void;
                    public setAllowExifRotation(param0: boolean): void;
                    public startPreview(): void;
                    public deInitListener$android_document_scanner_debug(): void;
                    public isTextDirectionResolved(): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setOverridePhotoWidth(param0: number): void;
                    public getDisplayId(): number;
                    public isProcessingEveryNthFrame$android_document_scanner_debug(): boolean;
                    public initListener$android_document_scanner_debug(param0: globalAndroid.media.MediaRecorder): void;
                    public setAutoSquareCrop(param0: boolean): void;
                    public getAnalysisExecutor$android_document_scanner_debug(): java.util.concurrent.ExecutorService;
                    public setFlashMode(param0: CameraFlashMode): void;
                    public setOverridePhotoHeight(param0: number): void;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public setWhiteBalance(param0: WhiteBalance): void;
                    public addView(param0: globalAndroid.view.View): void;
                    public getLatestImage$android_document_scanner_debug(): globalAndroid.graphics.Bitmap;
                    public setRecorder$android_document_scanner_debug(param0: globalAndroid.media.MediaRecorder): void;
                    public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                    public setMTimer$android_document_scanner_debug(param0: java.util.Timer): void;
                    public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                    public getSaveToGallery(): boolean;
                    public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                    public clearChildFocus(param0: globalAndroid.view.View): void;
                    public getLayoutDirection(): number;
                    public getSupportedRatios(): androidNative.Array<string>;
                    public incrementCurrentFrame$android_document_scanner_debug(): void;
                    public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
                    public hasCameraPermission(): boolean;
                    public setSaveToGallery(param0: boolean): void;
                    public setAudioLevelsEnabled(param0: boolean): void;
                    public setListener(param0: CameraEventListener): void;
                    public startDurationTimer$android_document_scanner_debug(): void;
                    public orientationUpdated(): void;
                    public isGettingAudioLevels$android_document_scanner_debug(): boolean;
                    public getRotation(): number;
                    public setAnalysisExecutor$android_document_scanner_debug(param0: java.util.concurrent.ExecutorService): void;
                    public requestTransparentRegion(param0: globalAndroid.view.View): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public setCurrentRotation(param0: number): void;
                    public getRecorder$android_document_scanner_debug(): globalAndroid.media.MediaRecorder;
                    public getParent(): globalAndroid.view.ViewParent;
                    public isTextAlignmentResolved(): boolean;
                    public setRetrieveLatestImage(param0: boolean): void;
                    public getDATETIME_FORMAT$android_document_scanner_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                    public canResolveTextAlignment(): boolean;
                    public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
                    /** @deprecated */
                    public requestFitSystemWindows(): void;
                    public getProcessEveryNthFrame(): number;
                    public getTIME_FORMAT$android_document_scanner_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                    public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
                    public getDuration(): number;
                    public requestAudioPermission(): void;
                    public hasAudioPermission(): boolean;
                    public getMaxVideoBitrate(): number;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getMaxVideoFrameRate(): number;
                    public takePhoto(): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public requestLayout(): void;
                    public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                    public setAutoFocus(param0: boolean): void;
                    public setProcessEveryNthFrame(param0: number): void;
                    public getFlashMode(): CameraFlashMode;
                    public getEnablePinchZoom(): boolean;
                    public getTextAlignment(): number;
                    public getWhiteBalance(): WhiteBalance;
                    public stopRecording(): void;
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public setDisplayId(param0: number): void;
                    public hasFlash(): boolean;
                    public constructor(param0: globalAndroid.content.Context);
                    public getEnableAudio(): boolean;
                    public getMTimerTask$android_document_scanner_debug(): java.util.TimerTask;
                    public setMaxAudioBitRate(param0: number): void;
                    public getDb(): number;
                    public stringSizeToSize$android_document_scanner_debug(param0: string): Size;
                    public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
                    public cameraRecording(): boolean;
                    public getDisplayRatio(): string;
                    public focusSearch(param0: number): globalAndroid.view.View;
                    public getCamcorderProfile$android_document_scanner_debug(param0: Quality): globalAndroid.media.CamcorderProfile;
                    public focusableViewAvailable(param0: globalAndroid.view.View): void;
                    public getRetrieveLatestImage(): boolean;
                    public getVIDEO_RECORDER_PERMISSIONS_REQUEST$android_document_scanner_debug(): number;
                    public setCurrentFrame$android_document_scanner_debug(param0: number): void;
                    public setEnablePinchZoom(param0: boolean): void;
                    public toggleFlash(): void;
                    public getDisableHEVC(): boolean;
                    public isLayoutRequested(): boolean;
                    public takePhoto(param0: string): void;
                    public getPosition(): CameraPosition;
                    public requestCameraPermission(): void;
                    public getMaxAudioBitRate(): number;
                    public getVIDEO_RECORDER_PERMISSIONS$android_document_scanner_debug(): androidNative.Array<string>;
                    public setLatestImage$android_document_scanner_debug(param0: globalAndroid.graphics.Bitmap): void;
                    public hasStoragePermission(): boolean;
                    public isLayoutDirectionResolved(): boolean;
                    public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
                    public getAutoSquareCrop(): boolean;
                    public getCurrentFrame$android_document_scanner_debug(): number;
                    public getOverridePhotoWidth(): number;
                    public setRotation(param0: CameraOrientation): void;
                    public getPictureSize(): string;
                    public recomputeViewAttributes(param0: globalAndroid.view.View): void;
                    public startRecording(): void;
                    public getRotation(): CameraOrientation;
                    public setDisableHEVC(param0: boolean): void;
                    public getCurrentRotation(): number;
                    public getNumberOfCameras(): number;
                    /** @deprecated */
                    public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                    public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
                    /** @deprecated */
                    public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
                    public setZoom(param0: number): void;
                    public convertToExifDateTime$android_document_scanner_debug(param0: number): string;
                    public requestPermission(): void;
                    public release(): void;
                    public initOptions$android_document_scanner_debug(): void;
                    public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
                    public bringChildToFront(param0: globalAndroid.view.View): void;
                    public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public isAudioLevelsEnabled(): boolean;
                    public stop(): void;
                    public childDrawableStateChanged(param0: globalAndroid.view.View): void;
                    public setMaxVideoBitrate(param0: number): void;
                    public getTextDirection(): number;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public requestFitSystemWindows(): void;
                    public getAmplitudeEMA(): number;
                    public getMDuration$android_document_scanner_debug(): number;
                    public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                    public stopPreview(): void;
                    public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                    public getOverridePhotoHeight(): number;
                    public setPictureSize(param0: string): void;
                    public setEnableAudio(param0: boolean): void;
                    public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                    public canResolveTextDirection(): boolean;
                    public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                    public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
                    public stopDurationTimer$android_document_scanner_debug(): void;
                    public requestDisallowInterceptTouchEvent(param0: boolean): void;
                    public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
                    public hasPermission(): boolean;
                    public setRotation(param0: number): void;
                    public setMTimerTask$android_document_scanner_debug(param0: java.util.TimerTask): void;
                    public getQuality(): Quality;
                    public addView(param0: globalAndroid.view.View, param1: number): void;
                    public getMTimer$android_document_scanner_debug(): java.util.Timer;
                    public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public setMDuration$android_document_scanner_debug(param0: number): void;
                    public getPreviewSurface(): any;
                    public setQuality(param0: Quality): void;
                    public getAmplitude(): number;
                    public getZoom(): number;
                    public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                    public getParentForAccessibility(): globalAndroid.view.ViewParent;
                    public getDATE_FORMAT$android_document_scanner_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public setDisplayRatio(param0: string): void;
                    public canResolveLayoutDirection(): boolean;
                    public requestStoragePermission(): void;
                    public toggleCamera(): void;
                    public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                    public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                    public convertFromExifDateTime$android_document_scanner_debug(param0: string): java.util.Date;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
                    public getPause(): boolean;
                    public setGettingAudioLevels$android_document_scanner_debug(param0: boolean): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public removeView(param0: globalAndroid.view.View): void;
                    public onStopNestedScroll(param0: globalAndroid.view.View): void;
                    public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                    public setPosition(param0: CameraPosition): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getListener(): CameraEventListener;
                }
                export namespace CameraBase {
                    export class WhenMappings extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraBase.WhenMappings>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class CameraEventListener extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraEventListener>;
                    /**
                     * Constructs a new instance of the com.websitebeaver.documentscanner.cameraview.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onReady(): void;
                        onCameraOpen(): void;
                        onCameraClose(): void;
                        onCameraPhoto(param0: java.io.File): void;
                        onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                        onCameraVideo(param0: java.io.File): void;
                        onCameraAnalysis(param0: ImageAnalysis): void;
                        onCameraError(param0: string, param1: java.lang.Exception): void;
                        onCameraVideoStart(): void;
                    });
                    public constructor();
                    public onCameraOpen(): void;
                    public onCameraClose(): void;
                    public onCameraVideo(param0: java.io.File): void;
                    public onCameraVideoStart(): void;
                    public onReady(): void;
                    public onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                    public onCameraError(param0: string, param1: java.lang.Exception): void;
                    public onCameraAnalysis(param0: ImageAnalysis): void;
                    public onCameraPhoto(param0: java.io.File): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class CameraFlashMode {
                    public static class: java.lang.Class<cameraview.CameraFlashMode>;
                    public static OFF: cameraview.CameraFlashMode;
                    public static AUTO: cameraview.CameraFlashMode;
                    public static RED_EYE: cameraview.CameraFlashMode;
                    public static TORCH: cameraview.CameraFlashMode;
                    public static valueOf(param0: string): cameraview.CameraFlashMode;
                    public getValue(): number;
                    public static values(): androidNative.Array<cameraview.CameraFlashMode>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
                export namespace CameraFlashMode {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraFlashMode.Companion>;
                        public from(param0: number): cameraview.CameraFlashMode;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class CameraOrientation {
                    public static class: java.lang.Class<cameraview.CameraOrientation>;
                    public static UNKNOWN: cameraview.CameraOrientation;
                    public static PORTRAIT: cameraview.CameraOrientation;
                    public static PORTRAIT_UPSIDE_DOWN: cameraview.CameraOrientation;
                    public static LANDSCAPE_LEFT: cameraview.CameraOrientation;
                    public static LANDSCAPE_RIGHT: cameraview.CameraOrientation;
                    public static values(): androidNative.Array<cameraview.CameraOrientation>;
                    public static valueOf(param0: string): cameraview.CameraOrientation;
                    public getValue(): number;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
                export namespace CameraOrientation {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraOrientation.Companion>;
                        public from(param0: number): cameraview.CameraOrientation;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class CameraPosition {
                    public static class: java.lang.Class<cameraview.CameraPosition>;
                    public static BACK: cameraview.CameraPosition;
                    public static FRONT: cameraview.CameraPosition;
                    public getValue(): number;
                    public static values(): androidNative.Array<cameraview.CameraPosition>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                    public static valueOf(param0: string): cameraview.CameraPosition;
                }
                export namespace CameraPosition {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraPosition.Companion>;
                        public from(param0: number): cameraview.CameraPosition;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class CameraView extends CameraBase {
                    public static class: java.lang.Class<cameraview.CameraView>;
                    public getSavePhotoToDisk(): boolean;
                    public setPause(param0: boolean): void;
                    public getAllowExifRotation(): boolean;
                    public finalize(): void;
                    public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
                    public setMaxVideoFrameRate(param0: number): void;
                    public getAutoFocus(): boolean;
                    public setAllowExifRotation(param0: boolean): void;
                    public startPreview(): void;
                    public isTextDirectionResolved(): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setAutoSquareCrop(param0: boolean): void;
                    public setFlashMode(param0: CameraFlashMode): void;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public setWhiteBalance(param0: WhiteBalance): void;
                    public addView(param0: globalAndroid.view.View): void;
                    public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                    public getRecorderQuality$android_document_scanner_debug(param0: Quality): androidx.camera.video.Quality;
                    public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                    public getSaveToGallery(): boolean;
                    public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                    public clearChildFocus(param0: globalAndroid.view.View): void;
                    public getLayoutDirection(): number;
                    public getSupportedRatios(): androidNative.Array<string>;
                    public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
                    public setSaveToGallery(param0: boolean): void;
                    public setAudioLevelsEnabled(param0: boolean): void;
                    public orientationUpdated(): void;
                    public getRotation(): number;
                    public setAmplitude(param0: number): void;
                    public requestTransparentRegion(param0: globalAndroid.view.View): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public getParent(): globalAndroid.view.ViewParent;
                    public isTextAlignmentResolved(): boolean;
                    public setRetrieveLatestImage(param0: boolean): void;
                    public canResolveTextAlignment(): boolean;
                    public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
                    /** @deprecated */
                    public requestFitSystemWindows(): void;
                    public setDb(param0: number): void;
                    public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
                    public getMaxVideoBitrate(): number;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getMaxVideoFrameRate(): number;
                    public takePhoto(): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public requestLayout(): void;
                    public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                    public setAutoFocus(param0: boolean): void;
                    public getFlashMode(): CameraFlashMode;
                    public getEnablePinchZoom(): boolean;
                    public getTextAlignment(): number;
                    public getWhiteBalance(): WhiteBalance;
                    public stopRecording(): void;
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public hasFlash(): boolean;
                    public constructor(param0: globalAndroid.content.Context);
                    public setMaxAudioBitRate(param0: number): void;
                    public getDb(): number;
                    public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
                    public getDisplayRatio(): string;
                    public cameraRecording(): boolean;
                    public focusSearch(param0: number): globalAndroid.view.View;
                    public focusableViewAvailable(param0: globalAndroid.view.View): void;
                    public getRetrieveLatestImage(): boolean;
                    public setEnablePinchZoom(param0: boolean): void;
                    public getDisableHEVC(): boolean;
                    public isLayoutRequested(): boolean;
                    public takePhoto(param0: string): void;
                    public getPosition(): CameraPosition;
                    public getMaxAudioBitRate(): number;
                    public isLayoutDirectionResolved(): boolean;
                    public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
                    public getAutoSquareCrop(): boolean;
                    public setRotation(param0: CameraOrientation): void;
                    public getPictureSize(): string;
                    public recomputeViewAttributes(param0: globalAndroid.view.View): void;
                    public startRecording(): void;
                    public getRotation(): CameraOrientation;
                    public setDisableHEVC(param0: boolean): void;
                    public getNumberOfCameras(): number;
                    /** @deprecated */
                    public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                    public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
                    /** @deprecated */
                    public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
                    public setZoom(param0: number): void;
                    public release(): void;
                    public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
                    public bringChildToFront(param0: globalAndroid.view.View): void;
                    public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setSavePhotoToDisk(param0: boolean): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public isAudioLevelsEnabled(): boolean;
                    public stop(): void;
                    public childDrawableStateChanged(param0: globalAndroid.view.View): void;
                    public setMaxVideoBitrate(param0: number): void;
                    public getTextDirection(): number;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setAmplitudeEMA(param0: number): void;
                    public requestFitSystemWindows(): void;
                    public getAmplitudeEMA(): number;
                    public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                    public stopPreview(): void;
                    public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                    public setPictureSize(param0: string): void;
                    public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                    public canResolveTextDirection(): boolean;
                    public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                    public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
                    public getAnalyserCallback(): ImageAnalysisCallback;
                    public startAutoFocus(): void;
                    public requestDisallowInterceptTouchEvent(param0: boolean): void;
                    public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
                    public setRotation(param0: number): void;
                    public getQuality(): Quality;
                    public addView(param0: globalAndroid.view.View, param1: number): void;
                    public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                    public getPreviewSurface(): any;
                    public setQuality(param0: Quality): void;
                    public getAmplitude(): number;
                    public getZoom(): number;
                    public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                    public getParentForAccessibility(): globalAndroid.view.ViewParent;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public setDisplayRatio(param0: string): void;
                    public canResolveLayoutDirection(): boolean;
                    public toggleCamera(): void;
                    public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                    public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
                    public getPause(): boolean;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public removeView(param0: globalAndroid.view.View): void;
                    public focusAtPoint(param0: number, param1: number): void;
                    public onStopNestedScroll(param0: globalAndroid.view.View): void;
                    public setAnalyserCallback(param0: ImageAnalysisCallback): void;
                    public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                    public setPosition(param0: CameraPosition): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                }
                export namespace CameraView {
                    export class CameraAnalyzer extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraView.CameraAnalyzer>;
                        public constructor();
                        public constructor(param0: any);
                        public analyze(param0: androidx.camera.core.ImageProxy): void;
                        public getDefaultTargetResolution(): any;
                        public onFrameAnalyzed(param0: any): boolean;
                    }
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraView.Companion>;
                    }
                    export class WhenMappings extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.CameraView.WhenMappings>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class FrameMetadata extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.FrameMetadata>;
                    public getRotation(): number;
                    public getHeight(): number;
                    public getWidth(): number;
                }
                export namespace FrameMetadata {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.FrameMetadata.Builder>;
                        public setWidth(param0: number): cameraview.FrameMetadata.Builder;
                        public constructor();
                        public setRotation(param0: number): cameraview.FrameMetadata.Builder;
                        public setHeight(param0: number): cameraview.FrameMetadata.Builder;
                        public build(): cameraview.FrameMetadata;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class ImageAnalysis extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.ImageAnalysis>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class ImageAnalysisCallback extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.ImageAnalysisCallback>;
                    /**
                     * Constructs a new instance of the com.websitebeaver.documentscanner.cameraview.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { process(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void });
                    public constructor();
                    public process(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class ImageAsyncProcessor extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.ImageAsyncProcessor>;
                    public constructor(param0: java.util.concurrent.CountDownLatch);
                    public setLatch(param0: java.util.concurrent.CountDownLatch): void;
                    public finished(): void;
                    public getLatch(): java.util.concurrent.CountDownLatch;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class Quality {
                    public static class: java.lang.Class<cameraview.Quality>;
                    public static MAX_480P: cameraview.Quality;
                    public static MAX_720P: cameraview.Quality;
                    public static MAX_1080P: cameraview.Quality;
                    public static MAX_2160P: cameraview.Quality;
                    public static HIGHEST: cameraview.Quality;
                    public static LOWEST: cameraview.Quality;
                    public static QVGA: cameraview.Quality;
                    public static valueOf(param0: string): cameraview.Quality;
                    public getValue(): number;
                    public static values(): androidNative.Array<cameraview.Quality>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
                export namespace Quality {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<cameraview.Quality.Companion>;
                        public from(param0: number): cameraview.Quality;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class Size extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.Size>;
                    public toString(): string;
                    public getHeight(): number;
                    public getWidth(): number;
                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class SurfaceUpdateListener extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.SurfaceUpdateListener>;
                    /**
                     * Constructs a new instance of the com.websitebeaver.documentscanner.cameraview.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onUpdate(): void });
                    public constructor();
                    public onUpdate(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace cameraview {
                export class WhiteBalance {
                    public static class: java.lang.Class<cameraview.WhiteBalance>;
                    public static Auto: cameraview.WhiteBalance;
                    public static Sunny: cameraview.WhiteBalance;
                    public static Cloudy: cameraview.WhiteBalance;
                    public static Shadow: cameraview.WhiteBalance;
                    public static Twilight: cameraview.WhiteBalance;
                    public static Fluorescent: cameraview.WhiteBalance;
                    public static Incandescent: cameraview.WhiteBalance;
                    public static WarmFluorescent: cameraview.WhiteBalance;
                    public static valueOf(param0: string): cameraview.WhiteBalance;
                    public getValue$android_document_scanner_debug(): string;
                    public static values(): androidNative.Array<cameraview.WhiteBalance>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace constants {
                export class DefaultSetting extends java.lang.Object {
                    public static class: java.lang.Class<constants.DefaultSetting>;
                    public static CROPPED_IMAGE_QUALITY: number;
                    public static LET_USER_ADJUST_CROP: boolean;
                    public static SHOW_COLOR_FILTERS: boolean;
                    public static AUTO_FOCUS: boolean;
                    public static MAX_NUM_DOCUMENTS: number;
                    public static MAX_NUM_SIMULTANEOUS_DOCUMENTS: number;
                    public static RESPONSE_TYPE: string;
                    public constructor();
                }
                export namespace DefaultSetting {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<constants.DefaultSetting.Companion>;
                        public getFLASH_MODE(): cameraview.CameraFlashMode;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace constants {
                export class DocumentScannerExtra extends java.lang.Object {
                    public static class: java.lang.Class<constants.DocumentScannerExtra>;
                    public static EXTRA_FLASH_MODE: string;
                    public static EXTRA_SHOW_COLOR_FILTERS: string;
                    public static EXTRA_AUTO_FOCUS: string;
                    public static EXTRA_CROPPED_IMAGE_QUALITY: string;
                    public static EXTRA_LET_USER_ADJUST_CROP: string;
                    public static EXTRA_MAX_NUM_DOCUMENTS: string;
                    public static EXTRA_MAX_NUM_SIMULTANEOUS_DOCUMENTS: string;
                    public static EXTRA_CUSTOM_ANALYSER_CLASS: string;
                    public constructor();
                }
                export namespace DocumentScannerExtra {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<constants.DocumentScannerExtra.Companion>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace constants {
                export class ResponseType extends java.lang.Object {
                    public static class: java.lang.Class<constants.ResponseType>;
                    public static BASE64: string;
                    public static IMAGE_FILE_PATH: string;
                    public constructor();
                }
                export namespace ResponseType {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<constants.ResponseType.Companion>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace enums {
                export class QuadCorner {
                    public static class: java.lang.Class<enums.QuadCorner>;
                    public static TOP_LEFT: enums.QuadCorner;
                    public static TOP_RIGHT: enums.QuadCorner;
                    public static BOTTOM_RIGHT: enums.QuadCorner;
                    public static BOTTOM_LEFT: enums.QuadCorner;
                    public static valueOf(param0: string): enums.QuadCorner;
                    public static values(): androidNative.Array<enums.QuadCorner>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace models {
                export abstract class Analyzer extends java.lang.Object {
                    public static class: java.lang.Class<models.Analyzer>;
                    public constructor();
                    public getDocumentCorners(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean): java.util.List<java.util.List<globalAndroid.graphics.Point>>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace models {
                export class Document extends java.lang.Object {
                    public static class: java.lang.Class<models.Document>;
                    public getOriginalPhotoPath(): string;
                    public constructor(param0: string, param1: globalAndroid.graphics.Bitmap, param2: Quad);
                    public getQuad(): Quad;
                    public getPreview(): globalAndroid.graphics.Bitmap;
                    public setQuad(param0: Quad): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace models {
                export class Line extends java.lang.Object {
                    public static class: java.lang.Class<models.Line>;
                    public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF);
                    public getFrom(): globalAndroid.graphics.PointF;
                    public getTo(): globalAndroid.graphics.PointF;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace models {
                export class Quad extends java.lang.Object {
                    public static class: java.lang.Class<models.Quad>;
                    public getCorners(): java.util.Map<enums.QuadCorner, globalAndroid.graphics.PointF>;
                    public getCornersList(): androidNative.Array<globalAndroid.graphics.Point>;
                    public mapPreviewToOriginalImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): models.Quad;
                    public constructor(param0: java.util.List<any>);
                    public constructor(param0: globalAndroid.graphics.Point, param1: globalAndroid.graphics.Point, param2: globalAndroid.graphics.Point, param3: globalAndroid.graphics.Point);
                    public getBottomLeftCorner(): globalAndroid.graphics.PointF;
                    public mapOriginalToPreviewImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): models.Quad;
                    public getCornerClosestToPoint(param0: globalAndroid.graphics.PointF): enums.QuadCorner;
                    public getEdges(): androidNative.Array<Line>;
                    public getTopRightCorner(): globalAndroid.graphics.PointF;
                    public applyRatio(param0: number): models.Quad;
                    public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
                    public moveCorner(param0: enums.QuadCorner, param1: number, param2: number): void;
                    public getTopLeftCorner(): globalAndroid.graphics.PointF;
                    public getBottomRightCorner(): globalAndroid.graphics.PointF;
                    public setCorners(param0: java.util.Map<enums.QuadCorner, globalAndroid.graphics.PointF>): void;
                }
                export namespace Quad {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<models.Quad.Companion>;
                        public getQuadAndCornerClosestToPoint(param0: java.util.List<models.Quad>, param1: globalAndroid.graphics.PointF): any;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace ui {
                export class CircleButton {
                    public static class: java.lang.Class<ui.CircleButton>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace ui {
                export class CircleTextButton {
                    public static class: java.lang.Class<ui.CircleTextButton>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setText(param0: string): void;
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                    public getText(): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace ui {
                export class CropView extends globalAndroid.view.View {
                    public static class: java.lang.Class<ui.CropView>;
                    public getQuads(): java.util.List<models.Quad>;
                    public setQuads(param0: java.util.List<models.Quad>): void;
                    public getImagePreviewBounds(): globalAndroid.graphics.RectF;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public getImageHeight(): number;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public setImageHeight(param0: number): void;
                    public setColors(param0: java.util.List<java.lang.Integer>): void;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public setImageWidth(param0: number): void;
                    public getImageWidth(): number;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context);
                    public setImagePreviewBounds(param0: number, param1: number, param2: number, param3: number): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public getColors(): java.util.List<java.lang.Integer>;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace ui {
                export class DoneButton {
                    public static class: java.lang.Class<ui.DoneButton>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace ui {
                export class ImageCropView {
                    public static class: java.lang.Class<ui.ImageCropView>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public getQuads(): java.util.List<models.Quad>;
                    public setImage(param0: globalAndroid.graphics.Bitmap): void;
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                    public getColors(): java.util.List<java.lang.Integer>;
                    public setQuads(param0: java.util.List<models.Quad>): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public setImagePreviewBounds(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number): void;
                    public setColors(param0: java.util.List<java.lang.Integer>): void;
                    public getImagePreviewBounds(): globalAndroid.graphics.RectF;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class CameraUtil extends java.lang.Object {
                    public static class: java.lang.Class<utils.CameraUtil>;
                    public constructor(param0: androidx.activity.ComponentActivity, param1: any, param2: any);
                    public openCamera(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class FileUtil extends java.lang.Object {
                    public static class: java.lang.Class<utils.FileUtil>;
                    public constructor();
                    public createImageFile(param0: globalAndroid.content.Context, param1: number): java.io.File;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class ImageUtil extends java.lang.Object {
                    public static class: java.lang.Class<utils.ImageUtil>;
                    public constructor();
                }
                export namespace ImageUtil {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<utils.ImageUtil.Companion>;
                        public getColorMatrixFilter(param0: number, param1: number, param2: number): globalAndroid.graphics.ColorMatrixColorFilter;
                        public readBitmapFromFileUriString(param0: string, param1: globalAndroid.content.ContentResolver): globalAndroid.graphics.Bitmap;
                        public getImageFromFile(param0: java.io.File, param1: number): globalAndroid.graphics.Bitmap;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class YuvByteBuffer extends java.lang.Object {
                    public static class: java.lang.Class<utils.YuvByteBuffer>;
                    public getType(): number;
                    public getBuffer(): java.nio.ByteBuffer;
                    public constructor(param0: globalAndroid.media.Image, param1: java.nio.ByteBuffer);
                }
                export namespace YuvByteBuffer {
                    export class ImageWrapper extends java.lang.Object {
                        public static class: java.lang.Class<utils.YuvByteBuffer.ImageWrapper>;
                        public constructor(param0: globalAndroid.media.Image);
                        public getWidth(): number;
                        public getY(): utils.YuvByteBuffer.PlaneWrapper;
                        public getV(): utils.YuvByteBuffer.PlaneWrapper;
                        public getHeight(): number;
                        public getU(): utils.YuvByteBuffer.PlaneWrapper;
                    }
                    export class PlaneWrapper extends java.lang.Object {
                        public static class: java.lang.Class<utils.YuvByteBuffer.PlaneWrapper>;
                        public getBuffer(): java.nio.ByteBuffer;
                        public getPixelStride(): number;
                        public getWidth(): number;
                        public constructor(param0: number, param1: number, param2: globalAndroid.media.Image.Plane);
                        public getHeight(): number;
                        public getRowStride(): number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class YuvToRgbConverter extends java.lang.Object {
                    public static class: java.lang.Class<utils.YuvToRgbConverter>;
                    public constructor(param0: globalAndroid.content.Context);
                    public destroy(): void;
                    public yuvToRgb(param0: globalAndroid.media.Image, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export namespace utils {
                export class YuvType extends java.lang.Object implements java.lang.annotation.Annotation {
                    public static class: java.lang.Class<utils.YuvType>;
                    /**
                     * Constructs a new instance of the com.websitebeaver.documentscanner.utils.YuvType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { equals(param0: any): boolean; hashCode(): number; toString(): string; annotationType(): java.lang.Class<any> });
                    public constructor();
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public annotationType(): java.lang.Class<any>;
                    public hashCode(): number;
                }
            }
        }
    }
}

//Generics information:
