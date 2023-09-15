declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static LIBRARY_PACKAGE_NAME: string;
                public static BUILD_TYPE: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentDetector extends java.lang.Object {
                public static class: java.lang.Class<DocumentDetector>;
                public findDocumentCorners(param0: globalAndroid.graphics.Bitmap): java.util.List<org.opencv.core.Point>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentScanner extends java.lang.Object {
                public static class: java.lang.Class<DocumentScanner>;
                public constructor(
                    param0: androidx.activity.ComponentActivity,
                    param1: any,
                    param2: any,
                    param3: any,
                    param4: string,
                    param5: java.lang.Boolean,
                    param6: java.lang.Integer,
                    param7: java.lang.Integer
                );
                public startScan(): void;
                public createDocumentScanIntent(): globalAndroid.content.Intent;
                public handleDocumentScanIntentResult(param0: androidx.activity.result.ActivityResult): void;
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentScannerActivity {
                public static class: java.lang.Class<DocumentScannerActivity>;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class DocumentScannerFileProvider {
                public static class: java.lang.Class<DocumentScannerFileProvider>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace websitebeaver {
        export namespace documentscanner {
            export class R extends java.lang.Object {
                public static class: java.lang.Class<R>;
            }
            export namespace R {
                export class animator extends java.lang.Object {
                    public static class: java.lang.Class<animator>;
                    public static button_grow_animation: number;
                }
                export class color extends java.lang.Object {
                    public static class: java.lang.Class<color>;
                    public static black: number;
                    public static done_button_inner_circle_color: number;
                }
                export class dimen extends java.lang.Object {
                    public static class: java.lang.Class<dimen>;
                    public static button_elevation: number;
                    public static button_zoom: number;
                    public static buttons_container_bottom_padding: number;
                    public static buttons_container_horizontal_padding: number;
                    public static buttons_container_min_height: number;
                    public static cropper_corner_radius: number;
                    public static cropper_selected_corner_background_magnification: number;
                    public static cropper_selected_corner_radius_magnification: number;
                    public static grown_button_elevation: number;
                    public static grown_button_zoom: number;
                    public static image_crop_view_initial_height: number;
                    public static image_crop_view_vertical_padding: number;
                    public static large_button_diameter: number;
                    public static large_button_outer_ring_offset: number;
                    public static large_button_ring_thickness: number;
                    public static small_button_diameter: number;
                    public static small_button_ring_thickness: number;
                }
                export class drawable extends java.lang.Object {
                    public static class: java.lang.Class<drawable>;
                    public static ic_baseline_add_24: number;
                    public static ic_baseline_arrow_back_24: number;
                    public static ic_baseline_check_24: number;
                }
                export class integer extends java.lang.Object {
                    public static class: java.lang.Class<integer>;
                    public static button_grow_animation_duration: number;
                    public static button_shrink_animation_duration: number;
                }
                export class layout extends java.lang.Object {
                    public static class: java.lang.Class<layout>;
                    public static activity_image_crop: number;
                }
                export class style extends java.lang.Object {
                    public static class: java.lang.Class<style>;
                    public static Theme_FullScreen: number;
                }
                export class xml extends java.lang.Object {
                    public static class: java.lang.Class<xml>;
                    public static file_paths: number;
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
                    public static class: java.lang.Class<DefaultSetting>;
                    public static CROPPED_IMAGE_QUALITY: number;
                    public static LET_USER_ADJUST_CROP: boolean;
                    public static MAX_NUM_DOCUMENTS: number;
                    public static RESPONSE_TYPE: string;
                    public constructor();
                }
                export namespace DefaultSetting {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<Companion>;
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
                    public static class: java.lang.Class<DocumentScannerExtra>;
                    public static EXTRA_CROPPED_IMAGE_QUALITY: string;
                    public static EXTRA_LET_USER_ADJUST_CROP: string;
                    public static EXTRA_MAX_NUM_DOCUMENTS: string;
                    public constructor();
                }
                export namespace DocumentScannerExtra {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<Companion>;
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
                    public static class: java.lang.Class<ResponseType>;
                    public static BASE64: string;
                    public static IMAGE_FILE_PATH: string;
                    public constructor();
                }
                export namespace ResponseType {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<Companion>;
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
                    public static class: java.lang.Class<QuadCorner>;
                    public static TOP_LEFT: QuadCorner;
                    public static TOP_RIGHT: QuadCorner;
                    public static BOTTOM_RIGHT: QuadCorner;
                    public static BOTTOM_LEFT: QuadCorner;
                    public static valueOf(param0: string): QuadCorner;
                    public static values(): androidNative.Array<QuadCorner>;
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
                export class Document extends java.lang.Object {
                    public static class: java.lang.Class<Document>;
                    public constructor(param0: string, param1: number, param2: number, param3: Quad);
                    public getOriginalPhotoHeight(): number;
                    public setCorners(param0: Quad): void;
                    public getCorners(): Quad;
                    public getOriginalPhotoFilePath(): string;
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
                    public static class: java.lang.Class<Line>;
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
                    public static class: java.lang.Class<Quad>;
                    public getCorners(): java.util.Map<enums.QuadCorner, globalAndroid.graphics.PointF>;
                    public mapPreviewToOriginalImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): Quad;
                    public getBottomLeftCorner(): globalAndroid.graphics.PointF;
                    public mapOriginalToPreviewImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): Quad;
                    public getCornerClosestToPoint(param0: globalAndroid.graphics.PointF): enums.QuadCorner;
                    public getEdges(): androidNative.Array<Line>;
                    public getTopRightCorner(): globalAndroid.graphics.PointF;
                    public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
                    public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Point);
                    public moveCorner(param0: enums.QuadCorner, param1: number, param2: number): void;
                    public getTopLeftCorner(): globalAndroid.graphics.PointF;
                    public getBottomRightCorner(): globalAndroid.graphics.PointF;
                    public setCorners(param0: java.util.Map<enums.QuadCorner, globalAndroid.graphics.PointF>): void;
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
                    public static class: java.lang.Class<CircleButton>;
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
                export class DoneButton {
                    public static class: java.lang.Class<DoneButton>;
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
                    public static class: java.lang.Class<ImageCropView>;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setImage(param0: globalAndroid.graphics.Bitmap): void;
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public setCropper(param0: models.Quad): void;
                    public getCorners(): models.Quad;
                    public setImagePreviewBounds(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
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
                    public static class: java.lang.Class<CameraUtil>;
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
                    public static class: java.lang.Class<FileUtil>;
                    public constructor();
                    public createImageFile(param0: androidx.activity.ComponentActivity, param1: number): java.io.File;
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
                    public static class: java.lang.Class<ImageUtil>;
                    public getImageFromFilePath(param0: string): globalAndroid.graphics.Bitmap;
                    public constructor();
                    public crop(param0: string, param1: models.Quad): globalAndroid.graphics.Bitmap;
                    public readBitmapFromFileUriString(param0: string, param1: globalAndroid.content.ContentResolver): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

//Generics information:
