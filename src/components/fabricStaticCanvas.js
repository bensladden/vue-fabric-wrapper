//const OBJECT_EVENTS = ["before:render", "after:render", "canvas:cleared", "object:added", "object:removed"];

export default {
    name: "fabric-static-canvas",
    props: {
        allowTouchScrolling: Boolean,
        backgroundColor: String,
        //backgroundImage :fabric.Image,
        backgroundVpt: { type: Boolean, default: true },
        //clipPath :fabric.Object,
        controlsAboveOverlay: Boolean,
        enableRetinaScaling: { type: Boolean, default: true },
        FX_DURATION: { type: Number, default: 500 },
        imageSmoothingEnabled: { type: Boolean, default: true },
        includeDefaultValues: { type: Boolean, default: true },
        overlayColor: String,
        //overlayImage :fabric.Image,
        overlayVpt: { type: Boolean, default: true },
        renderOnAddRemove: { type: Boolean, default: true },
        skipOffscreen: { type: Boolean, default: true },
        stateful: Boolean,
        svgViewportTransformation: { type: Boolean, default: true },
        viewportTransform: Array
    }
};
