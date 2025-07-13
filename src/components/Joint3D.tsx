import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Joint3D = () => {
  const jointRef = useRef<THREE.Group>(null!);
  const paperRef = useRef<THREE.Mesh>(null!);
  const cannabisRef = useRef<THREE.Group>(null!);
  const filterRef = useRef<THREE.Mesh>(null!);
  const emberRef = useRef<THREE.Mesh>(null!);
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    setTime((t) => t + delta);
    
    if (jointRef.current) {
      // Gentle floating motion
      jointRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      jointRef.current.rotation.z = Math.sin(time * 0.3) * 0.05;
    }

    // Rolling animation sequence
    const cycle = (time % 8); // 8 second cycle
    
    if (paperRef.current) {
      // Paper unrolling and rolling up
      if (cycle < 2) {
        // Start flat
        paperRef.current.rotation.z = 0;
        paperRef.current.scale.setScalar(Math.min(cycle / 2, 1));
      } else if (cycle < 4) {
        // Rolling phase
        const rollProgress = (cycle - 2) / 2;
        paperRef.current.rotation.z = rollProgress * Math.PI * 2;
      } else {
        // Fully rolled
        paperRef.current.rotation.z = Math.PI * 2;
        paperRef.current.scale.setScalar(1);
      }
    }

    if (cannabisRef.current) {
      // Cannabis sprinkling animation
      cannabisRef.current.children.forEach((child, index) => {
        if (cycle < 3) {
          const spinkleDelay = index * 0.2;
          const fallProgress = Math.max(0, (cycle - spinkleDelay) / 1.5);
          child.position.y = Math.max(-0.5, 2 - fallProgress * 2.5);
          child.rotation.x = fallProgress * Math.PI * 2;
          child.rotation.y = fallProgress * Math.PI * 3;
        } else {
          child.position.y = -0.5;
        }
      });
    }

    // Ember glow at the end
    if (emberRef.current && cycle > 6) {
      const glowIntensity = Math.sin(time * 8) * 0.5 + 0.5;
      const material = emberRef.current.material as THREE.MeshLambertMaterial;
      material.emissive = new THREE.Color(0xff4400).multiplyScalar(glowIntensity * 0.8);
      emberRef.current.scale.setScalar(0.8 + glowIntensity * 0.3);
    }
  });

  // Create cannabis particles
  const cannabisParticles = Array.from({ length: 12 }, (_, i) => (
    <Sphere
      key={i}
      ref={(el) => el && cannabisRef.current?.add(el)}
      args={[0.03 + Math.random() * 0.02]}
      position={[
        -2 + Math.random() * 4,
        2 + Math.random() * 0.5,
        -0.1 + Math.random() * 0.2
      ]}
    >
      <meshLambertMaterial
        color={Math.random() > 0.5 ? "#2d5016" : "#4a3b1f"}
      />
    </Sphere>
  ));

  return (
    <group ref={jointRef} position={[0, 0, 0]}>
      {/* Filter tip */}
      <Cylinder
        ref={filterRef}
        args={[0.08, 0.08, 0.4]}
        position={[-2.2, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshLambertMaterial
          color="#f5f5dc"
        />
      </Cylinder>

      {/* Paper wrapper */}
      <Cylinder
        ref={paperRef}
        args={[0.05, 0.12, 3.5]}
        position={[0, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshLambertMaterial
          color="#faf0e6"
          transparent
          opacity={0.7}
        />
      </Cylinder>

      {/* Cannabis particles */}
      <group ref={cannabisRef}>
        {cannabisParticles}
      </group>

      {/* Ember at the tip */}
      <Sphere
        ref={emberRef}
        args={[0.04]}
        position={[1.8, 0, 0]}
      >
        <meshLambertMaterial
          color="#ff4400"
          emissive="#ff2200"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Smoke particles */}
      {Array.from({ length: 6 }, (_, i) => (
        <Sphere
          key={`smoke-${i}`}
          args={[0.02 + i * 0.01]}
          position={[
            2.2 + i * 0.3,
            i * 0.2,
            (Math.sin(time + i) * 0.1)
          ]}
        >
          <meshLambertMaterial
            color="#dddddd"
            transparent
            opacity={0.3 - i * 0.05}
          />
        </Sphere>
      ))}
    </group>
  );
};

export default Joint3D;