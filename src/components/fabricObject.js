// const OBJECT_EVENTS = [
//     "event:added",
//     "event:removed",
//     "event:selected",
//     "event:deselected",
//     "event:modified",
//     "event:modified",
//     "event:moved",
//     "event:scaled",
//     "event:rotated",
//     "event:skewed",
//     "event:rotating",
//     "event:scaling",
//     "event:moving",
//     "event:skewing",
//     "event:mousedown",
//     "event:mouseup",
//     "event:mouseover",
//     "event:mouseout",
//     "event:mousewheel",
//     "event:mousedblclick",
//     "event:dragover",
//     "event:dragenter",
//     "event:dragleave",
//     "event:drop"
// ];

// const WATCH_PROPS = [];

export default {
    name: "fabric-object",
    inheritAttrs: false,
    props: {
        angle: Number,
        backgroundColor: String,
        borderColor: String,
        borderDashArray: Array,
        borderOpacityWhenMoving: Number,
        borderScaleFactor: Number,
        cacheProperties: Array,
        centeredRotation: { type: Boolean, default: true },
        centeredScaling: { type: Boolean, default: false },
        //clipPath :fabric.Object,
        cornerColor: String,
        cornerDashArray: Array,
        cornerSize: Number,
        cornerStrokeColor: String,
        cornerStyle: String,
        dirty: { type: Boolean, default: true },
        evented: { type: Boolean, default: true },
        excludeFromExport: { type: Boolean, default: false },
        fill: String,
        fillRule: String,
        flipX: Boolean,
        flipY: Boolean,
        globalCompositeOperation: String,
        hasBorders: { type: Boolean, default: true },
        hasControls: { type: Boolean, default: true },
        hasRotatingPoint: { type: Boolean, default: true },
        height: Number,
        hoverCursor: String,
        includeDefaultValues: { type: Boolean, default: true },
        inverted: { type: Boolean, default: false },
        left: Number,
        lockMovementX: { type: Boolean, default: false },
        lockMovementY: { type: Boolean, default: false },
        lockRotation: { type: Boolean, default: false },
        lockScalingFlip: { type: Boolean, default: false },
        lockScalingX: { type: Boolean, default: false },
        lockScalingY: { type: Boolean, default: false },
        lockSkewingX: { type: Boolean, default: false },
        lockSkewingY: { type: Boolean, default: false },
        lockUniScaling: { type: Boolean, default: false },
        minScaleLimit: Number,
        moveCursor: String,
        noScaleCache: { type: Boolean, default: true },
        objectCaching: { type: Boolean, default: true },
        opacity: Number,
        originX: String,
        originY: String,
        padding: Number,
        paintFirst: String,
        perPixelTargetFind: { type: Boolean, default: false },
        rotatingPointOffset: Number,
        scaleX: Number,
        scaleY: Number,
        selectable: { type: Boolean, default: true },
        selectionBackgroundColor: String,
        //shadow :fabric.Shadow,
        skewX: Number,
        skewY: Number,
        //statefullCache: Boolean,
        stateProperties: Array,
        stroke: String,
        strokeDashArray: Array,
        strokeDashOffset: Number,
        strokeLineCap: String,
        strokeLineJoin: String,
        strokeMiterLimit: Number,
        strokeUniform: { type: Boolean, default: false },
        strokeWidth: Number,
        top: Number,
        //transformMatrix :Array, Depreciated,
        transparentCorners: { type: Boolean, default: true },
        //type :String,
        visible: { type: Boolean, default: true },
        width: Number
    },
    inject: ["eventBus", "fabricWrapper"],
    computed: {
        canvas() {
            return this.fabricWrapper.canvas;
        },
        fabric() {
            return this.fabricWrapper.fabric;
        },
        definedProps() {
            const obj = { ...this.$props };
            Object.keys(obj).forEach(key => {
                console.log(key, obj[key]);
                if (obj[key] === undefined) {
                    delete obj[key];
                }
            });
            return obj;
        }
    },
    methods: {}
};
