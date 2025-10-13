import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Preload } from '@react-three/drei';

type ModelViewerProps = {
  src: string;
  className?: string;
  onClose?: () => void;
};

function Model({ src }: { src: string }) {
  const gltf = useGLTF(src, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

export default function ModelViewer({ src, className = '', onClose }: ModelViewerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={wrapperRef}
      className={`fixed inset-0 z-90 flex items-center justify-center p-6 bg-black/60 ${className}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl h-[70vh] rounded-lg overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-white/10 backdrop-blur text-sm"
          aria-label="Close model viewer"
        >
          Close
        </button>

        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <Suspense fallback={<Html center>Loading...</Html>}>
            <Model src={src} />
            <Preload all />
          </Suspense>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
}

// Note: this component uses three + @react-three/fiber + @react-three/drei
// Place GLB/GLTF assets in `public/models/` and pass their path like `/models/satellite.glb`
