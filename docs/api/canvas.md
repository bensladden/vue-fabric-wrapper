---
sidebar: auto
prev: false
next: ./circle
---

# Canvas Component
[Official Docs Link](http://fabricjs.com/docs/fabric.Canvas.html)

The Fabric Canvas component serves as a wrapper around a fabric.Canvas instance.
This component contains a slot that all children components are placed.

## Example Usage
```html
<fabric-canvas>

</fabric-canvas>
```

## props

| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
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

## events
Fires the following [events](http://fabricjs.com/docs/fabric.Canvas.html#Canvas)
| Event Name|
|-----------|
| object:modified |
| object:rotated |
| object:scaled |
| object:moved |
| object:skewed |
| object:rotating |
| object:scaling |
| object:moving |
| object:skewing |
| before:transform |
| before:selection:cleared |
| selection:cleared |
| selection:updated |
| selection:created |
| path:created |
| mouse:down |
| mouse:move |
| mouse:up |
| mouse:down:before |
| mouse:move:before |
| mouse:up :before |
| mouse:over |
| mouse:out |
| mouse:dblclick |
| event:dragover |
| event:dragenter |
| event:dragleave |
| event:drop |