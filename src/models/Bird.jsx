import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame((state, delta) => {
        // console.log(birdRef.current.position.x);
        // console.log(birdRef.current.rotation.y);
        // console.log(state.camera.position.x)
        // birdRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 5;

        if (birdRef.current.position.z >= -30) {

            birdRef.current.position.x += 0.05;
            birdRef.current.position.z -= 0.05;
        }
        if (birdRef.current.position.z < -30 && birdRef.current.position.x <= 10 && birdRef.current.rotation.y > -2) {
            birdRef.current.position.x += 0.05;
            birdRef.current.rotation.y -= 0.011;
            // console.log(birdRef.current.rotation.y)
        }
        if (birdRef.current.position.z < -30 && birdRef.current.position.x >= 10 && birdRef.current.position.z >= -50) {
            birdRef.current.position.x += 0.005;
            birdRef.current.position.z -= 0.07;
            birdRef.current.rotation.y -= 0.005;
            // console.log(birdRef.current.position.z)
        }
        if (birdRef.current.position.z < -50 && birdRef.current.position.x > -10) {
            // console.log(birdRef.current.rotation.y)
            birdRef.current.position.x -= 0.05;
        }
        if (birdRef.current.rotation.y < -3 && birdRef.current.position.x <= -10) {
            // console.log(birdRef.current.rotation.y)
            // console.log(birdRef.current.position.x)
            birdRef.current.position.x -= 0.01;
            birdRef.current.rotation.y -= 0.005;
            birdRef.current.position.z += 0.07;
        }
        if (birdRef.current.rotation.y < -4.9 && birdRef.current.position.x > -10 && birdRef.current.rotation.y >= -5.5) {
            // console.log(birdRef.current.rotation.y)
            // console.log(birdRef.current.position.x)
            birdRef.current.position.x -= 0.01;
            birdRef.current.rotation.y -= 0.005;
            birdRef.current.position.z += 0.07;
        }
        if (birdRef.current.rotation.y < -5.5) {
            // console.log(birdRef.current.rotation.y)
            // console.log(birdRef.current.position.x)
            birdRef.current.rotation.y -= 0.005;
            birdRef.current.position.x += 0.01;
            // birdRef.current.rotation.y -= 0.005;
            birdRef.current.position.z += 0.09;
        }
        if (birdRef.current.position.x >= 35) {
            birdRef.current.rotation.y = 0;
            birdRef.current.position.x = -25;
            birdRef.current.position.z = -3;

        }


    });

    return (
        <mesh
            position={[-25, 5, -3]}
            // position={[-5, 2, 1]}
            scale={[0.01, 0.01, 0.01]}
            // scale={[0.003, 0.003, 0.003]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;
