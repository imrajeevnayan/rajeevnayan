import { Component, ErrorInfo, ReactNode, Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ThreeJS Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return null;
        }
        return this.props.children;
    }
}

// 3D Parallax and Scroll Velocity Interactive Group
const InteractiveGroup = ({ children, isMobile }: { children: ReactNode, isMobile: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    let targetScrollY = 0;
    
    useFrame((state) => {
        if (!groupRef.current || isMobile) return;
        
        // 1. Mouse Follow (Cursor Parallax)
        const targetX = (state.pointer.x * Math.PI) / 8;
        const targetY = (state.pointer.y * Math.PI) / 8;
        
        // 2. Scroll Velocity Tracking for 3D Particle movement
        targetScrollY = window.scrollY;
        // Scroll rotation offsets
        const srX = targetScrollY * 0.0015;
        const srY = targetScrollY * 0.0008;
        
        // Smooth interpolation for both mouse and scroll
        groupRef.current.rotation.y += (targetX + srY - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x += (-targetY + srX - groupRef.current.rotation.x) * 0.05;
        
        // Slight Z-axis shift (depth parallax) on scroll
        groupRef.current.position.z += ((targetScrollY * 0.002) - groupRef.current.position.z) * 0.05;
    });
    
    return <group ref={groupRef}>{children}</group>;
};

const Shapes = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <InteractiveGroup isMobile={isMobile}>
            {/* Scroll-responsive interactive particles */}
            <Sparkles count={isMobile ? 50 : 120} scale={isMobile ? 10 : 25} size={isMobile ? 2 : 4} speed={0.4} opacity={0.6} color="#60a5fa" />
            <Sparkles count={isMobile ? 30 : 80} scale={isMobile ? 9 : 20} size={isMobile ? 3 : 6} speed={0.3} opacity={0.4} color="#a855f7" />

            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                <mesh position={isMobile ? [1.5, 2, -3] : [4, 1, -4]} scale={isMobile ? 0.9 : 1.4}>
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={isMobile ? 2 : 4}
                        thickness={2}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.5}
                        temporalDistortion={0.05}
                        color="#6366f1"
                    />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                <mesh position={isMobile ? [-1.5, -1, -3] : [-4, -1, -2]} scale={isMobile ? 0.6 : 0.9}>
                    <torusGeometry args={[0.8, 0.3, 16, 32]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={isMobile ? 2 : 4}
                        thickness={1.5}
                        chromaticAberration={0.1}
                        color="#ec4899"
                    />
                </mesh>
            </Float>
            
            {!isMobile && (
                <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
                    <mesh position={[2, -3, -5]} scale={1.2}>
                        <octahedronGeometry args={[1, 0]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={2}
                            chromaticAberration={0.05}
                            color="#06b6d4"
                        />
                    </mesh>
                </Float>
            )}
            
            <Float speed={3} rotationIntensity={1.2} floatIntensity={2}>
                <mesh position={isMobile ? [0, 3, -4] : [-2, 3, -6]} scale={isMobile ? 0.5 : 0.7}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.9} />
                </mesh>
            </Float>
        </InteractiveGroup>
    );
};

const GeometricShapes = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-60 transition-opacity duration-1000">
            <ErrorBoundary>
                <Canvas 
                    dpr={isMobile ? 1 : [1, 1.5]}
                    gl={{ 
                        powerPreference: "high-performance",
                        antialias: !isMobile,
                        alpha: true,
                        stencil: false,
                        depth: true,
                    }}
                    performance={{ min: 0.5 }}
                >
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} />
                        <pointLight position={[-10, -10, -10]} intensity={1} color="#60a5fa" />
                        <Environment preset="warehouse" />
                        <Shapes isMobile={isMobile} />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default GeometricShapes;
