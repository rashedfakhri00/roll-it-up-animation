import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Joint3D from './Joint3D';

const LoadingScreen3D = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full h-full relative">
        <Canvas
          style={{ width: '100vw', height: '100vh' }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={45} />
          
          {/* Lighting setup for sketch-like appearance */}
          <ambientLight intensity={0.4} color="#f0f8ff" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8} 
            color="#ffffff"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight 
            position={[-5, -5, -2]} 
            intensity={0.3} 
            color="#87ceeb"
          />
          
          {/* Main joint component */}
          <Joint3D />
          
          {/* Optional: Remove OrbitControls for production or keep for interactivity */}
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
        
        {/* Loading text overlay */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <p className="text-foreground/70 text-xl font-light tracking-wider animate-pulse">
            Rolling the perfect joint...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen3D;
