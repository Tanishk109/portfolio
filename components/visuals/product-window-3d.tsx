"use client"

import { useCursor, useTexture } from "@react-three/drei"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"

type ProductWindow3DProps = {
  textureSrc: string
  position: [number, number, number]
  rotation: [number, number, number]
  slug: string
  accent: string
}

export function ProductWindow3D({ textureSrc, position, rotation, slug, accent }: ProductWindow3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  const texture = useTexture(textureSrc)
  const [hovered, setHovered] = useState(false)

  useCursor(hovered)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    groupRef.current.position.y = position[1] + Math.sin(t * 0.7 + position[0]) * 0.08
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.35 + position[2]) * 0.05
  })

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    document.getElementById(`project-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={hovered ? 1.08 : 1}
      onPointerOver={(event) => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <mesh position={[0, 0, -0.035]}>
        <boxGeometry args={[2.35, 1.5, 0.08]} />
        <meshStandardMaterial color="#0b1020" roughness={0.5} metalness={0.28} />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[2.22, 1.28]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.73, 0.04]}>
        <boxGeometry args={[2.35, 0.18, 0.05]} />
        <meshStandardMaterial color={accent} roughness={0.35} metalness={0.18} emissive={hovered ? accent : "#000000"} emissiveIntensity={hovered ? 0.18 : 0} />
      </mesh>
    </group>
  )
}
