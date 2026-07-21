"use client"

import { Environment, Float } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

import { ProductWindow3D } from "@/components/visuals/product-window-3d"

const productWindows = [
  {
    slug: "intellmeet",
    textureSrc: "/project-previews/intellmeet-live.png",
    position: [-2.25, 0.86, -0.2] as [number, number, number],
    rotation: [0.08, 0.38, -0.08] as [number, number, number],
    accent: "#70d7ff",
  },
  {
    slug: "research-portal",
    textureSrc: "/project-previews/research-portal-live.png",
    position: [2.18, 0.28, -0.1] as [number, number, number],
    rotation: [0.04, -0.42, 0.06] as [number, number, number],
    accent: "#a78bfa",
  },
  {
    slug: "rehabilitation-portal",
    textureSrc: "/project-previews/nrcms-live.png",
    position: [0.18, -1.18, 0.12] as [number, number, number],
    rotation: [-0.08, 0.06, 0.03] as [number, number, number],
    accent: "#55e6c1",
  },
]

export function ProductUniverse() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.25, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="product-universe-canvas"
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={1.25} />
        <pointLight position={[-3, 1.8, 2]} intensity={0.85} color="#70d7ff" />
        <pointLight position={[3, -1.5, 2]} intensity={0.7} color="#a78bfa" />
        <CameraRig />
        <SceneCore />
        <ConnectionField />
        {productWindows.map((window) => (
          <ProductWindow3D key={window.slug} {...window} />
        ))}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

function CameraRig() {
  const { camera, pointer } = useThree()

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.34, 0.035)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.25 + pointer.y * 0.22, 0.035)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function SceneCore() {
  const coreRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = clock.elapsedTime * 0.18
      coreRef.current.rotation.y = clock.elapsedTime * 0.24
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.12
      ringRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.24) * 0.12
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.16}>
      <group>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.82, 2]} />
          <meshPhysicalMaterial
            color="#142131"
            roughness={0.18}
            metalness={0.35}
            transmission={0.12}
            thickness={0.55}
            emissive="#102f42"
            emissiveIntensity={0.55}
          />
        </mesh>
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.48, 0.012, 12, 96]} />
            <meshBasicMaterial color="#70d7ff" transparent opacity={0.52} />
          </mesh>
          <mesh rotation={[Math.PI / 2.8, 0, Math.PI / 4]}>
            <torusGeometry args={[1.86, 0.01, 12, 96]} />
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.38} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

function ConnectionField() {
  const points = useMemo(() => {
    const positions = new Float32Array(42 * 3)
    for (let i = 0; i < 42; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.7
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.8
    }
    return positions
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#70d7ff" size={0.035} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}
