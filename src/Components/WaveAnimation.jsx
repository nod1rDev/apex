import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveAnimation = () => {
  const meshRef = useRef();
  const geometryRef = useRef();

  // Create a plane geometry with segments
  const geometry = new THREE.PlaneGeometry(15, 15, 32, 32);
  geometryRef.current = geometry;

  // Animation frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = geometryRef.current.attributes.position;

    // Animate vertices
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Create wave effect
      const z = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(y * 0.5 + time) * 0.5;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <primitive object={geometry} />
      <meshStandardMaterial
        color="#4299e1"
        wireframe
        side={THREE.DoubleSide}
        transparent
        opacity={0.3}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </mesh>
  );
};

export default WaveAnimation; 