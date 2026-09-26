import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';

function Sculpture() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.08;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.65}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={512}
          thickness={0.5}
          roughness={0.18}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.03}
          distortion={0.07}
          distortionScale={0.2}
          color="#e9e7e0"
        />
      </mesh>
    </Float>
  );
}

export default function Experience3D() {
  return (
    <div className="experience-3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.15} />
        <directionalLight position={[3, 4, 5]} intensity={2.5} />
        <pointLight position={[-3, -2, 2]} intensity={8} distance={8} />
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <Sculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
