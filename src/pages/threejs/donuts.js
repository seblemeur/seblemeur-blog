import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import * as THREE from "three"
import * as dat from "dat.gui"

const ThreejsDonutsPage = ({ data, location }) => {
  const siteTitle = "Threejs donuts"

  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl")
    const gui = new dat.GUI()
    console.log(gui)
    console.log(canvas)

    const sizes = {
      width: 600,
      height: 600,
    }

    // Scene
    const scene = new THREE.Scene()
    console.log(scene)

    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)

    // sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial()
    )
    sphere.position.y = 1
    scene.add(sphere)

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    // camera.position.x = 4
    camera.position.y = 2
    camera.position.z = 5
    scene.add(camera)

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
      // const elapsedTime = clock.getElapsedTime()
      // console.log(elapsedTime)
      // const nbrScale = 0.1

      // if (sphere.scale.x < 2 || sphere.scale.x < -1) {
      //   sphere.scale.x = sphere.scale.x + nbrScale
      //   sphere.scale.y = sphere.scale.y + nbrScale
      //   sphere.scale.z = sphere.scale.z + nbrScale
      // } else {
      //   sphere.scale.x = sphere.scale.x - nbrScale
      //   sphere.scale.y = sphere.scale.y - nbrScale
      //   sphere.scale.z = sphere.scale.z - nbrScale
      // }

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Threejs donuts" />
      <canvas className="webgl"></canvas>
    </Layout>
  )
}

export default ThreejsDonutsPage
