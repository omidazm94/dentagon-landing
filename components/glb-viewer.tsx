"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Group, Box3, Vector3 } from "three";

interface GLBViewerProps {
  modelPath: string;
  className?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  enableRotate?: boolean;
  fov?: number;
}

function Model({
  modelPath,
  autoRotate,
}: {
  modelPath: string;
  autoRotate?: boolean;
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<Group>(null);

  useEffect(() => {
    if (scene && modelRef.current) {
      // Calculate bounding box
      const box = new Box3().setFromObject(scene);
      const size = box.getSize(new Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);

      // Scale to fit in view (target size of 3 units)
      const scale = 1.5 / maxDimension;
      modelRef.current.scale.setScalar(scale);

      // Center the model properly
      const center = box.getCenter(new Vector3());
      modelRef.current.position.set(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale
      );

      // Set initial rotation for better viewing angle
      modelRef.current.rotation.x = 0;
      modelRef.current.rotation.y = 0;
    }
  }, [scene]);

  useFrame((state) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
    </div>
  );
}

export default function GLBViewer({
  modelPath,
  className = "",
  autoRotate = true,
  enableZoom = true,
  enablePan = false,
  enableRotate = true,
  fov = 10,
}: GLBViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [10, 10, 20], fov }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Environment preset="studio" />

          <Model modelPath={modelPath} autoRotate={autoRotate} />

          <OrbitControls
            enableZoom={enableZoom}
            enablePan={enablePan}
            enableRotate={enableRotate}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
