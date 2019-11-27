---
sidebar: auto
prev: ./canvas
next: false
---

# Fabric Objects
Root object class from which all 2d shape classes inherit from. In this wrapper the fabricOject acts as a mixin for each shape componet.
[Official Docs Link](http://fabricjs.com/docs/fabric.Object.html)


## props
| Name | Type               | Required | Default |
| ---- | ------------------ | -------- | ------- |
| id | `Number`/`String` | `yes` | |
| angle | `Number` | `no` | |
| backgroundColor | `String` | `no` | |
| borderColor | `String` | `no` | |
| borderDashArray | `Array` | `no` | |
| borderOpacityWhenMoving | `Number` | `no` | |
| borderScaleFactor | `Number` | `no` | |
| cacheProperties | `Array` | `no` | |
| centeredRotation | `Boolean` | `no` | `true` |
| centeredScaling | `Boolean` | `no` | `false` |
| cornerColor | `String` | `no` | |
| cornerDashArray | `Array` | `no` | |
| cornerSize | `Number` | `no` | |
| cornerStrokeColor | `String` | `no` | |
| cornerStyle | `String` | `no` | |
| dirty | `Boolean` | `no` | `true` |
| evented | `Boolean` | `no` | `true` |
| excludeFromExport | `Boolean` | `no` | `false` |
| fill | `String` | `no` | |
| fillRule | `String` | `no` | |
| flipX | `Boolaen` | `no` | |
| flipY | `Boolean` | `no` | |
| globalCompositeOperation | `String` | `no` | |
| hasBorders | `Boolean` | `no` | `true` |
| hasControls | `Boolean` | `no` | `true` |
| hasRotatingPoint | `Boolean` | `no` | `true` |
| height | `Number` | `no` |  |
| hoverCursor | `String` | `no` |  |
| includeDefaultValues | `Boolean` | `no` | `true`  |
| inverted | `Boolean` | `no` | `false` |
| left | `Number` | `no` |  |
| lockMovementX | `Boolean` | `no` | `false` |
| lockMovementY | `Boolean` | `no` | `false` |
| lockRotation | `Boolean` | `no` | `false` |
| lockScalingFlip | `Boolean` | `no` | `false` |
| lockScalingX | `Boolean` | `no` | `false` |
| lockScalingY | `Boolean` | `no` | `false` |
| lockUniScaling | `Boolean` | `no` | `false` |
| minScaleLimit | `Number` | `no` |  |
| moveCursor | `String` | `no` |  |
| noScaleCache | `Boolean` | `no` | `true` |
| objectCaching | `Boolean` | `no` | `true` |
| opacity | `Number` | `no` | |
| originX | `String` | `no` | |
| originY | `String` | `no` | |
| padding | `Number` | `no` | |
| paintFirst | `String` | `no` | |
| perPixelTargetFind | `Boolean` | `no` | `false` |
| rotatingPointOffset | `Number` | `no` | |
| scaleX | `Number` | `no` | |
| scaleY | `Number` | `no` | |
| selectable | `Boolean` | `no` | `true` |
| selectionBackgroundColor | `String` | `no` | |
| skewX | `Number` | `no` | |
| skewY | `Number` | `no` | |
| stateProperties | `Array` | `no` | |
| stroke | `String` | `no` | |
| strokeDashArray | `Array` | `no` | |
| strokeDashOffset | `Number` | `no` | |
| strokeLineCap | `String` | `no` | |
| strokeLineJoin | `String` | `no` | |
| strokeMiterLimit | `Number` | `no` | |
| strokeUniform | `Boolean` | `no` | |
| strokeWidth | `Number` | `no` | |
| top | `Number` | `no` | |
| transparentCorners | `Boolean` | `no` | `true`|
| visible | `Boolean` | `no` | `true`|
| width | `Number` | `no` | |

## events
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
