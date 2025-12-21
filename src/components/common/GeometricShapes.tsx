import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera } from '@react-three/drei';

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

const Shapes = () => {
    return (
        <>
            <Sparkles
                count={100}
                scale={12}
                size={4}
                speed={0.4}
                opacity={0.7}
                color="#60a5fa"
            />
            <Sparkles
                count={50}
                scale={10}
                size={6}
                speed={0.3}
                opacity={0.5}
                color="#a855f7"
            />

            {/* Subtle animated background mesh */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[4, 2, -10]} rotation={[0, 0, 0]} scale={10}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#6366f1"
                        wireframe
                        transparent
                        opacity={0.05}
                    />
                </mesh>
            </Float>
        </>
    );
};

const GeometricShapes = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40">
            <ErrorBoundary>
                <Canvas>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <pointLight position={[-10, -10, -10]} intensity={1} />
                        <Shapes />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default GeometricShapes;
