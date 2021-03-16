---
title: Threejs things
featuredImage: "./threejs.png"
date: "2021-03-10T23:10:00.284Z"
description: "Threejs things"
tags: ["threejs", "mac"]
---

How to install and start postgres on mac, guidelines :

# Helpers

## Show box helper from computeBoundingBox :

```
    const box = new THREE.BoxHelper( OBJECT_MESH_YOU_WANT, 0xffff00 );
    scene.add( box );
```

## Show axes helper :

```
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)
```

Yup!
