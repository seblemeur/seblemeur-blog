import React, { useEffect } from "react"
import DonutsCss from "../threejs/donuts.css"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import * as THREE from "three"

const ThreejsDonutsPage = ({ data, location }) => {
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl")

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    // Scene
    const scene = new THREE.Scene()
    console.log(scene)

    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)

    // material
    const material = new THREE.MeshStandardMaterial()
    material.roughness = 0.4

    // torus
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 32, 64),
      material
    )

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.2, 32, 64),
      material
    )

    const torus3 = new THREE.Mesh(
      new THREE.TorusGeometry(0.7, 0.2, 32, 64),
      material
    )

    scene.add(torus, torus2, torus3)

    // ambient light
    const ambientLight = new THREE.AmbientLight()
    ambientLight.color = new THREE.Color("Oxffffff")
    ambientLight.intensity = 0.5
    scene.add(ambientLight)

    // point light
    const directionalLight = new THREE.DirectionalLight(0x4e00ff, 0.5)
    directionalLight.position.set(0, 0, 4)
    scene.add(directionalLight)

    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      0.2
    )
    scene.add(directionalLightHelper)

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 5
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      torus.scale.x = Math.cos(elapsedTime)
      torus.scale.y = Math.cos(elapsedTime)
      torus.scale.z = Math.cos(elapsedTime)

      torus2.scale.x = Math.cos(elapsedTime)
      torus2.scale.y = Math.cos(elapsedTime)
      torus2.scale.z = Math.cos(elapsedTime)

      torus3.scale.x = Math.cos(elapsedTime)
      torus3.scale.y = Math.cos(elapsedTime)
      torus3.scale.z = Math.cos(elapsedTime)

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return <canvas className="webgl"></canvas>
}

export default ThreejsDonutsPage
