"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

// Floating particles component
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlesCount = 2000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 50
      pos[i + 1] = (Math.random() - 0.5) * 50
      pos[i + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Holographic wireframe cube
function HolographicCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

// Holographic sphere
function HolographicSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.25} />
    </mesh>
  )
}

// Holographic torus (ring)
function HolographicTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.5, 0.4, 16, 32]} />
      <meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

// Glowing particles that pulse
function GlowingOrbs() {
  const orbsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        const offset = i * 0.5
        child.position.y = Math.sin(state.clock.elapsedTime + offset) * 2
        child.position.x = Math.cos(state.clock.elapsedTime * 0.5 + offset) * 3
      })
    }
  })

  return (
    <group ref={orbsRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 3 - 6, 0, -5]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// Main scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
      <HolographicCube position={[-5, 0, -8]} />
      <HolographicSphere position={[5, 0, -10]} />
      <HolographicTorus position={[0, 2, -12]} />
      <HolographicCube position={[8, -2, -15]} />
      <HolographicSphere position={[-7, 3, -14]} />
      <GlowingOrbs />
    </>
  )
}

// Main component
export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ background: "transparent" }}>
        <Scene />
      </Canvas>
    </div>
  )
}
