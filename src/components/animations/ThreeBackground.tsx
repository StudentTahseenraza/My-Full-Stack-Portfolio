import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random stars
  const stars = new Float32Array(5000 * 3);
  for (let i = 0; i < stars.length; i += 3) {
    stars[i] = (Math.random() - 0.5) * 100; // x
    stars[i + 1] = (Math.random() - 0.5) * 100; // y  
    stars[i + 2] = (Math.random() - 0.5) * 100; // z
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Points ref={pointsRef} positions={stars} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const FloatingShapes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      groupRef.current.children.forEach((child, index) => {
        (child as THREE.Mesh).position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cubes */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 10 - 5,
          Math.cos(i) * 5,
          Math.sin(i) * 8 - 4
        ]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial 
            color={`hsl(${i * 45}, 70%, 60%)`} 
            emissive={`hsl(${i * 45}, 70%, 30%)`}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 10, 50]} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.3} />
        
        {/* Point light */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#0ea5e9" />
        
        {/* Star field */}
        <StarField />
        
        {/* Floating shapes */}
        <FloatingShapes />
        
        {/* Animated rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3, 3.2, 32]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.1} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;