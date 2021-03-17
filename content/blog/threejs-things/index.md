---
title: Threejs things
featuredImage: "./threejs.png"
date: "2021-03-10T23:10:00.284Z"
description: "Threejs things"
tags: ["threejs"]
---

# Works

<a href="../threejs/donuts" target="_blank">Donuts</a>

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

# Lights

## Create light :

```
const ambientLight = new THREE.AmbientLight();
ambientLight.color = new THREE.Color('Oxffffff');
ambientLight.intensity = 0.5;
scene.add(ambientLight)
```

```
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3);
directionalLight.position.set(1, 0.25, 0);
scene.add(directionalLight);
```

```
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
scene.add(hemisphereLight)
```

```
const pointLight = new THREE.PointLight(0xff9000, 0.5, 10);
pointLight.position.set(1, -0.5, 1)
scene.add(pointLight);
```

```
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1);
rectAreaLight.position.set(-1.5, 0, 1.5)
rectAreaLight.lookAt(new THREE.Vector3())
scene.add(rectAreaLight)
```

```
const spotLight = new THREE.SpotLight(0X78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1);
spotLight.position.set(0, 2, 3);
scene.add(spotLight)
```

## Helper for lights :

```
// helpers
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2);
scene.add(hemisphereLightHelper);
```

```
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
scene.add(directionalLightHelper);
```

```
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
scene.add(pointLightHelper);
```

```
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

window.requestAnimationFrame(() =>{
    spotLightHelper.update();
})
```

```
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
scene.add(rectAreaLightHelper)
```

Yup!
