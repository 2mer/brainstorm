import {
	Environment,
	Float,
	Scroll,
	ScrollControls,
	useScroll,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Depth, LayerMaterial, Noise, Color } from 'lamina';
import React, { useRef } from 'react';
import * as THREE from 'three';

export default function ScrollScene({ children }) {
	return (
		<Canvas
			dpr={[1, 2]}
			camera={{ position: [0, 0, 5] }}
			className='mainCanvas'
		>
			<ScrollControls pages={5}>
				<Scroll>
					<Composition />
				</Scroll>
				<Scroll html>{children}</Scroll>
			</ScrollControls>

			{/* We're building a cube-mapped environment declaratively.
          Anything you put in here will be filmed (once) by a cubemap-camera
          and applied to the scenes environment, and optionally background. */}
			<Environment background resolution={64}>
				<mesh scale={100}>
					<sphereGeometry args={[1, 64, 64]} />
					<LayerMaterial side={THREE.BackSide}>
						<Color color='blue' alpha={1} mode='normal' />
						<Depth
							colorA='#00ffff'
							colorB='#ff8f00'
							alpha={0.5}
							mode='normal'
							near={0}
							far={300}
							origin={[100, 100, 100]}
						/>
						<Noise
							mapping='local'
							type='cell'
							scale={0.5}
							mode='softlight'
						/>
					</LayerMaterial>
				</mesh>
			</Environment>
		</Canvas>
	);
}

const Composition = () => {
	const scroll = useScroll();
	const ref = useRef();
	useFrame(() => {
		const a = scroll.range(0, 1 / 3);

		if (ref.current) ref.current.rotation.x = a;
	});

	return (
		<>
			<pointLight position={[10, 10, 5]} />
			<pointLight position={[-10, -10, -5]} />
			<ambientLight intensity={0.4} />
			<group position={[0, -1.5, 0]}>
				<Float
					position={[0, 2.15, 0]}
					speed={0}
					rotationIntensity={0}
					floatIntensity={0}
				>
					<mesh castShadow receiveShadow ref={ref}>
						{/* <torusKnotGeometry args={[4, 0.25, 256, 24, 1, 5]} /> */}
						<torusKnotGeometry args={[2, 0.25, 256, 24, 1, 5]} />
						{/* <boxGeometry args={[2, 2, 2, 1, 1, 1]} /> */}
						<meshStandardMaterial
							color='white'
							roughness={0.1}
							metalness={0.925}
						/>
					</mesh>
				</Float>
				{/* <ContactShadows scale={10} blur={3} opacity={0.25} far={10} /> */}
			</group>
		</>
	);
};
