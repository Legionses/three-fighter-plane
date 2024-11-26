import {Canvas, useFrame, useThree} from "@react-three/fiber";
import PlaneModel from "../components/Models/PlaneModel";
import {OrbitControls} from "@react-three/drei";
import Background from "../components/Background";
import React, {useEffect, useRef} from "react";
import Marker from "../components/Models/Marker";
import {useAppContext} from "../utils/hooks/useAppContext";
import * as THREE from "three";

const CustomCamera = () => {
    const { historySection, appMode} = useAppContext();
    const { camera } = useThree();

    const targetRotation = useRef(null);
    const targetPosition = useRef(null);

    useEffect(() => {
        if (appMode !== 'menu') return;

        window.camera = camera;

        targetPosition.current = new THREE.Vector3(0.72, 0.61, 0.99);
        targetRotation.current = new THREE.Euler(
            -0.5278975527512614, // Rotation around the X-axis in radians
            0.5688729511030738,  // Rotation around the Y-axis in radians
            0.30434545513138267  // Rotation around the Z-axis in radians
        )
    }, [camera, appMode]);

    useEffect(() => {
        if (appMode !== 'history') return;

        if (historySection === 'overview') {
            targetPosition.current = new THREE.Vector3(0.46, 0.485, 0.552);
            targetRotation.current = new THREE.Euler(
                -0.613, // Rotation around the X-axis in radians
                0.53,  // Rotation around the Y-axis in radians
                0.34  // Rotation around the Z-axis in radians
            )
        }

        if (historySection === 'fuselage') {
            targetPosition.current = new THREE.Vector3(0.064, 1.302, 0.132);
            targetRotation.current = new THREE.Euler(
                -1.40, // Rotation around the X-axis in radians
                0.003,  // Rotation around the Y-axis in radians
                0.021  // Rotation around the Z-axis in radians
            )
        }
    },[historySection, appMode])

    useFrame(({camera}) => {
        if (!targetRotation.current) return;

        camera.rotation.x = THREE.MathUtils.lerp(
            camera.rotation.x,
            targetRotation.current.x,
            0.01 // Speed factor (adjust for smoothness)
        );
        camera.rotation.y = THREE.MathUtils.lerp(
            camera.rotation.y,
            targetRotation.current.y,
            0.01
        );
        camera.rotation.z = THREE.MathUtils.lerp(
            camera.rotation.z,
            targetRotation.current.z,
            0.01
        );

        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            targetPosition.current.x,
            0.025 // Speed factor (adjust for smoothness)
        );
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            targetPosition.current.y,
            0.025 // Speed factor (adjust for smoothness)
        );
        camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            targetPosition.current.z,
            0.025 // Speed factor (adjust for smoothness)
        );
    })

    return null;
};

const MainScene = ({mode}) => {
    return(
        <div id="canvas-container">
            <Canvas>
                <directionalLight position={[0.987, 1.854, 0.865]} intensity={4}/>
                <CustomCamera/>
                <OrbitControls/>
                <Background/>
                <PlaneModel>
                    <Marker position={[0, .5, 0]}/>
                    <Marker position={[0, 0, 0.5]}/>
                </PlaneModel>
            </Canvas>
        </div>
    )
}

export default MainScene;