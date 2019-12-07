---
sidebar: auto
---
# API

## Canvas Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Canvas.html)

The Fabric Canvas component serves as a wrapper around a fabric.Canvas instance.
This component contains a slot that all children components are placed.

### Example Usage
```html
<fabric-canvas>
	<!-- Insert objects/groups here -->
</fabric-canvas>
```

### props

| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| id | `String` | no | `"c"` |
|[allowAutoScrolling](http://fabricjs.com/docs/fabric.Canvas.html#allowTouchScrolling) | `Boolean` | no | `false` |
|[backgroundColor](http://fabricjs.com/docs/fabric.Canvas.html#backgroundColor) | `String` | no | `""` |
|[backgroundVpt](http://fabricjs.com/docs/fabric.Canvas.html#backgroundVpt) | `Boolean` | no | `true` |
|[controlsAboveOverlay](http://fabricjs.com/docs/fabric.Canvas.html#controlsAboveOverlay) | `Boolean` | no | `` |
|[enableRetinaScaling](http://fabricjs.com/docs/fabric.Canvas.html#enableRetinaScaling) | `Boolean` | no | `true` |
|[FX_DURATION](http://fabricjs.com/docs/fabric.Canvas.html#FX_DURATION) | `Number` | no | `500` |
|[imageSmoothingEnabled](http://fabricjs.com/docs/fabric.Canvas.html#imageSmoothingEnabled) | `Boolean` | no | `true` |
|[includeDefaultValues](http://fabricjs.com/docs/fabric.Canvas.html#includeDefaultValues) | `Boolean` | no | `true` |
|[overlayColor](http://fabricjs.com/docs/fabric.Canvas.html#overlayColor) | `String` | no | `` |
|[overlayVpt](http://fabricjs.com/docs/fabric.Canvas.html#overlayVpt) | `Boolean` | no | `true` |
|[renderOnAddRemove](http://fabricjs.com/docs/fabric.Canvas.html#renderOnAddRemove) | `Boolean` | no | `true` |
|[stateful](http://fabricjs.com/docs/fabric.Canvas.html#stateful) | `Boolean` | no | `` |
|[svgViewportTransformation](http://fabricjs.com/docs/fabric.Canvas.html#svgViewportTransformation) | `Boolean` | no | `true` |
|[viewportTransform](http://fabricjs.com/docs/fabric.Canvas.html#viewportTransform) | `Array` | no | `[]` |

### events
Fires the following [events](http://fabricjs.com/docs/fabric.Canvas.html#Canvas)
Note vue recommends kebab case variables
| Canvas Event Name | Vue Event |
|-----------| ------ |
| object:modified | object-modified  |
| object:rotated | object-rotated |
| object:scaled | object-scaled |
| object:moved | object-moved |
| object:skewed | object-skewed |
| object:rotating | object-rotating |
| object:scaling | object-scaling |
| object:moving | object-moving |
| object:skewing | object-skweing |
| before:transform | before-transform  |
| before:selection:cleared | before-selection-cleared |
| selection:cleared | selection-cleared |
| selection:updated | selection-updated |
| selection:created | seleciton-created |
| path:created | path-created |
| mouse:down | mouse-down |
| mouse:move | mouse-move |
| mouse:up | mouse-up |
| mouse:down:before | moude-down-before |
| mouse:move:before | mouse-move-before |
| mouse:up:before | mouse-up-before |
| mouse:over | mouse-over |
| mouse:out | mouse-out |
| mouse:dblclick | mouse-dblclick |
| event:dragover | event-dragover |
| event:dragenter | event-dragenter |
| event:dragleave | event-dragleave |
| event:drop | event-drop |

## Fabric Objects
Root object class from which all 2d shape classes inherit from. In this wrapper the fabricOject acts as a mixin for each shape componet.
[Official Docs Link](http://fabricjs.com/docs/fabric.Object.html)

### props
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| id | `Number`/`String` | `yes` | |
| [angle](http://fabricjs.com/docs/fabric.Object.html#angle) | `Number` | no | |
| [backgroundColor](http://fabricjs.com/docs/fabric.Object.html#backgroundColor) | `String` | no | |
| [borderColor](http://fabricjs.com/docs/fabric.Object.html#borderColor) | `String` | no | |
| [borderDashArray](http://fabricjs.com/docs/fabric.Object.html#borderDashArray) | `Array` | no | |
| [borderOpacityWhenMoving](http://fabricjs.com/docs/fabric.Object.html#borderOpacityWhenMoving) | `Number` | no | |
| [borderScaleFactor](http://fabricjs.com/docs/fabric.Object.html#borderScaleFactor) | `Number` | no | |
| [cacheProperties](http://fabricjs.com/docs/fabric.Object.html#cacheProperties) | `Array` | no | |
| [centeredRotation](http://fabricjs.com/docs/fabric.Object.html#centeredRotation) | `Boolean` | no | `true` |
| [centeredScaling](http://fabricjs.com/docs/fabric.Object.html#centeredScaling) | `Boolean` | no | `false` |
| [cornerColor](http://fabricjs.com/docs/fabric.Object.html#cornerColor) | `String` | no | |
| [cornerDashArray](http://fabricjs.com/docs/fabric.Object.html#cornerDashArray) | `Array` | no | |
| [cornerSize](http://fabricjs.com/docs/fabric.Object.html#cornerSize) | `Number` | no | |
| [cornerStrokeColor](http://fabricjs.com/docs/fabric.Object.html#cornerStrokeColor) | `String` | no | |
| [cornerStyle](http://fabricjs.com/docs/fabric.Object.html#cornerStyle) | `String` | no | |
| [dirty](http://fabricjs.com/docs/fabric.Object.html#dirty) | `Boolean` | no | `true` |
| [evented](http://fabricjs.com/docs/fabric.Object.html#evented) | `Boolean` | no | `true` |
| [excludeFromExport](http://fabricjs.com/docs/fabric.Object.html#excludeFromExport) | `Boolean` | no | `false` |
| [fill](http://fabricjs.com/docs/fabric.Object.html#fill) | `String` | no | |
| [fillRule](http://fabricjs.com/docs/fabric.Object.html#fillRule) | `String` | no | |
| [flipX](http://fabricjs.com/docs/fabric.Object.html#flipX) | `Boolaen` | no | |
| [flipY](http://fabricjs.com/docs/fabric.Object.html#flipY) | `Boolean` | no | |
| [globalCompositeOperation](http://fabricjs.com/docs/fabric.Object.html#globalCompositeOperation) | `String` | no | |
| [hasBorders](http://fabricjs.com/docs/fabric.Object.html#hasBorders) | `Boolean` | no | `true` |
| [hasControls](http://fabricjs.com/docs/fabric.Object.html#hasControls) | `Boolean` | no | `true` |
| [hasRotatingPoint](http://fabricjs.com/docs/fabric.Object.html#hasRotatingPoint) | `Boolean` | no | `true` |
| [height](http://fabricjs.com/docs/fabric.Object.html#height) | `Number` | no |  |
| [hoverCursor](http://fabricjs.com/docs/fabric.Object.html#hoverCursor) | `String` | no |  |
| [includeDefaultValues](http://fabricjs.com/docs/fabric.Object.html#includeDefaultValues) | `Boolean` | no | `true`  |
| [inverted](http://fabricjs.com/docs/fabric.Object.html#inverted) | `Boolean` | no | `false` |
| [left](http://fabricjs.com/docs/fabric.Object.html#left) | `Number` | no |  |
| [lockMovementX](http://fabricjs.com/docs/fabric.Object.html#lockMovementX) | `Boolean` | no | `false` |
| [lockMovementY](http://fabricjs.com/docs/fabric.Object.html#lockMovementY) | `Boolean` | no | `false` |
| [lockRotation](http://fabricjs.com/docs/fabric.Object.html#lockRotation) | `Boolean` | no | `false` |
| [lockScalingFlip](http://fabricjs.com/docs/fabric.Object.html#lockScalingFlip) | `Boolean` | no | `false` |
| [lockScalingX](http://fabricjs.com/docs/fabric.Object.html#lockScalingX) | `Boolean` | no | `false` |
| [lockScalingY](http://fabricjs.com/docs/fabric.Object.html#lockScalingY) | `Boolean` | no | `false` |
| [lockUniScaling](http://fabricjs.com/docs/fabric.Object.html#lockUniScaling) | `Boolean` | no | `false` |
| [minScaleLimit](http://fabricjs.com/docs/fabric.Object.html#minScaleLimit) | `Number` | no |  |
| [moveCursor](http://fabricjs.com/docs/fabric.Object.html#moveCursor) | `String` | no |  |
| [noScaleCache](http://fabricjs.com/docs/fabric.Object.html#noScaleCache) | `Boolean` | no | `true` |
| [objectCaching](http://fabricjs.com/docs/fabric.Object.html#objectCaching) | `Boolean` | no | `true` |
| [opacity](http://fabricjs.com/docs/fabric.Object.html#opacity) | `Number` | no | |
| [originX](http://fabricjs.com/docs/fabric.Object.html#originX) | `String` | no | |
| [originY](http://fabricjs.com/docs/fabric.Object.html#originY) | `String` | no | |
| [padding](http://fabricjs.com/docs/fabric.Object.html#padding) | `Number` | no | |
| [paintFirst](http://fabricjs.com/docs/fabric.Object.html#paintFirst) | `String` | no | |
| [perPixelTargetFind](http://fabricjs.com/docs/fabric.Object.html#perPixelTargetFind) | `Boolean` | no | `false` |
| [rotatingPointOffset](http://fabricjs.com/docs/fabric.Object.html#rotatingPointOffset) | `Number` | no | |
| [scaleX](http://fabricjs.com/docs/fabric.Object.html#scaleX) | `Number` | no | |
| [scaleY](http://fabricjs.com/docs/fabric.Object.html#scaleY) | `Number` | no | |
| [selectable](http://fabricjs.com/docs/fabric.Object.html#selectable) | `Boolean` | no | `true` |
| [selectionBackgroundColor](http://fabricjs.com/docs/fabric.Object.html#selectionBackgroundColor) | `String` | no | |
| [skewX](http://fabricjs.com/docs/fabric.Object.html#skewX) | `Number` | no | |
| [skewY](http://fabricjs.com/docs/fabric.Object.html#skewY) | `Number` | no | |
| [stateProperties](http://fabricjs.com/docs/fabric.Object.html#stateProperties) | `Array` | no | |
| [stroke](http://fabricjs.com/docs/fabric.Object.html#stroke) | `String` | no | |
| [strokeDashArray](http://fabricjs.com/docs/fabric.Object.html#strokeDashArray) | `Array` | no | |
| [strokeDashOffset](http://fabricjs.com/docs/fabric.Object.html#strokeDashOffset) | `Number` | no | |
| [strokeLineCap](http://fabricjs.com/docs/fabric.Object.html#strokeLineCap) | `String` | no | |
| [strokeLineJoin](http://fabricjs.com/docs/fabric.Object.html#strokeLineJoin) | `String` | no | |
| [strokeMiterLimit](http://fabricjs.com/docs/fabric.Object.html#strokeMiterLimit) | `Number` | no | |
| [strokeUniform](http://fabricjs.com/docs/fabric.Object.html#strokeUniform) | `Boolean` | no | |
| [strokeWidth](http://fabricjs.com/docs/fabric.Object.html#strokeWidth) | `Number` | no | |
| [top](http://fabricjs.com/docs/fabric.Object.html#top) | `Number` | no | |
| [transparentCorners](http://fabricjs.com/docs/fabric.Object.html#transparentCorners) | `Boolean` | no | `true`|
| [visible](http://fabricjs.com/docs/fabric.Object.html#visible) | `Boolean` | no | `true`|
| [width](http://fabricjs.com/docs/fabric.Object.html#width) | `Number` | no | |

### events
| Event Name |
|-----------|
| added |
| removed |
| selected |
| deselected |
| modified |
| moved |
| scaled |
| rotated |
| skewed |
| rotating |
| scaling |
| moving |
| skewing |
| mousedown |
| mouseup |
| mouseover |
| mouseout |
| mousewheel |
| mousedblclick |
| dragover |
| dragenter |
| dragleave |
| drop |

## Circle Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Circle.html)


### Example Usage
```html
<fabric-canvas>
	<fabric-circle :id="'someUUID'" :radius="50"></fabric-circle>
</fabric-canvas>
```

### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| [radius](http://fabricjs.com/docs/fabric.Circle.html#radius) | `Number` | no | 50 |

### events
All Fabric.Object Events

## Ellipse Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Ellipse.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-ellipse :id="'someUUID'"></fabric-ellipse>
</fabric-canvas>
```

### props
All Fabric.Object Props

### events
All Fabric.Object Events

## Group Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Group.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-group :id="'someUUID'">
	<!-- grouped components here -->
	</fabric-group>
</fabric-canvas>
```

### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| [subTargetCheck](http://fabricjs.com/docs/fabric.Group.html#subTargetCheck) | `Boolean`| no | `false`|

### events
All Fabric.Object Events

## Image From URL Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Image.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-image-from-url :id="'someUUID'"></fabric-image-from-url>
</fabric-canvas>
```
### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| url | `String`| yes | ``|

### events
All Fabric.Object Events

## Line Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Line.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-line :id="'someUUID'"></fabric-line>
</fabric-canvas>
```
### props
All Fabric.Object Props

### events
All Fabric.Object Events

## Path Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Path.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-path :id="'someUUID'"></fabric-path>
</fabric-canvas>
```
### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| path | `String`/`Array` | yes | ``|

### events
All Fabric.Object Events

## Polygon Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Polygon.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-polygon :id="'someUUID'"></fabric-polygon>
</fabric-canvas>
```
### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| points | `Array` | yes |  |

### events
All Fabric.Object Events

## Polyline Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Polyline.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-polyline :id="'someUUID'"></fabric-Polyline>
</fabric-canvas>
```
### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| points | `Array` | yes |  |

### events
All Fabric.Object Events

## Rectangle Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Rect.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-Rectangle :id="'someUUID'"></fabric-Rectangle>
</fabric-canvas>
```
### props
All Fabric.Object Props

### events
All Fabric.Object Events


## SVG From URL Component
[Official Docs Link](http://fabricjs.com/docs/fabric.html#.loadSVGFromURL)
Combines Fabric Group and Fabric Path Components together

### Example Usage
```html
<fabric-canvas>
	<fabric-svg-from-url :id="'someUUID'"></fabric-svg-from-url>
</fabric-canvas>
```

## Text Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Text.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-text :id="'someUUID'"></fabric-text>
</fabric-canvas>
```
### props
All Fabric.Object Props + the following
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| [fontFamily](http://fabricjs.com/docs/fabric.Text.html#fontFamily) | `String` | no | `Times New Roman` |
| [fontSize](http://fabricjs.com/docs/fabric.Text.html#fontSize) | `Number` | no | `40` |
| [fontStyle](http://fabricjs.com/docs/fabric.Text.html#fontStyle) | `String` | no | `normal` |
| [fontWeight](http://fabricjs.com/docs/fabric.Text.html#fontWeight) | `Number`/`String` | no | `normal` |
| [text](http://fabricjs.com/docs/fabric.Text.html#text) | `String` | yes |  |
| [textAlign](http://fabricjs.com/docs/fabric.Text.html#textAlign) | `String` | no | `left` |
| [textBackgroundColor](http://fabricjs.com/docs/fabric.Text.html#textBackgroundColor) | `String` | no |  |

### events
All Fabric.Object Events

## Triangle Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Triangle.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-triangle :id="'someUUID'"></fabric-triangle>
</fabric-canvas>
```
### props
All Fabric.Object Props

### events
All Fabric.Object Events

## Animation Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Object.html#animate)

### Example Usage
```html
<fabric-canvas>
	<fabric-triangle :id="'someUUID'">
        <fabric-animation
          :animateStart="startAnimation"
          :animateKeys="{ left: 400 }"
          :animateDuration="2000"
        ></fabric-animation>
	</fabric-triangle>
</fabric-canvas>
```

### props
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| start | `Boolean` | no | `false` |
| animateKeys | `Object` | no | `{}` |
| animateDuration | `Number` | no | `500` |
| animateEasing | `String` | no | `""` |

###  events
| Event Name |
|-----------|
| step |
| complete |

## Gradient Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Gradient.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-triangle :id="'someUUID'">
         <fabric-gradient
            :x1="0"
            :x2="0"
            :y1="0"
            :y2="1"
            :gradientUnits="'percentage'"
            :colorStops="{ 0: '#000', 1: '#fff' }"
        ></fabric-gradient>
	</fabric-triangle>
</fabric-canvas>
```

### props
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| gradientKey | `String` | no | `"fill"` |
| [offsetX](http://fabricjs.com/docs/fabric.Gradient.html#offsetX) | `Number` | no | `0` |
| [offsetY](http://fabricjs.com/docs/fabric.Gradient.html#offsetY) | `Number` | no | `0` |
| [gradientTransform](http://fabricjs.com/docs/fabric.Gradient.html#gradientTransform) | `Array` | no | `null` |
| [gradientUnits](http://fabricjs.com/docs/fabric.Gradient.html#gradientUnits) | `String` | no | `"pixels"` |
| [gradientType](http://fabricjs.com/docs/fabric.Gradient.html#gradientType) | `String` | no | `"linear"` |
| [x1](http://fabricjs.com/docs/fabric.Gradient.html#x1) | `Number` | no | `0` |
| [y1](http://fabricjs.com/docs/fabric.Gradient.html#y1) | `Number` | no | `0` |
| [x2](http://fabricjs.com/docs/fabric.Gradient.html#x2) | `Number` | no | `0` |
| [y2](http://fabricjs.com/docs/fabric.Gradient.html#y2) | `Number` | no | `0` |
| [r1](http://fabricjs.com/docs/fabric.Gradient.html#r1) | `Number` | no | `0` |
| [r2](http://fabricjs.com/docs/fabric.Gradient.html#r2) | `Number` | no | `0` |
| [colorStops](http://fabricjs.com/docs/fabric.Gradient.html#colorStops) | `Object` | no | `{}` |

###  events
None

## Shadow Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Shadow.html)

### Example Usage
```html
<fabric-canvas>
	<fabric-triangle :id="'someUUID'">
         <fabric-shadow
			:offsetX="25"
            :offsetY="25"
            :color="'rgba(0,0,0,.3)'"
        ></fabric-shadow>
	</fabric-triangle>
</fabric-canvas>
```

### props
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| [affectStroke](http://fabricjs.com/docs/fabric.Shadow.html#affectStroke) | `Boolean` | no | `false` |
| [blur](http://fabricjs.com/docs/fabric.Shadow.html#blur) | `Number` | no | `0` |
| [color](http://fabricjs.com/docs/fabric.Shadow.html#color) | `String` | no | `"rgb(0,0,0)"` |
| [includeDefaultValues](http://fabricjs.com/docs/fabric.Shadow.html#includeDefaultValues) | `Boolean` | no | `true` |
| [nonScaling](http://fabricjs.com/docs/fabric.Shadow.html#nonScaling) | `Boolean` | no | `false` |
| [offsetX](http://fabricjs.com/docs/fabric.Shadow.html#offsetX) | `Number` | no | `0` |
| [offsetY](http://fabricjs.com/docs/fabric.Shadow.html#offsetY) | `Number` | no | `0` |

###  events
None