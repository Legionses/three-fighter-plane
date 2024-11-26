import {Billboard, Html} from "@react-three/drei";
import React, {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

const Marker = ({position}) => {
    const ref = useRef()
    // This holds the local occluded state
    const [isOccluded, setOccluded] = useState()
    const [isInRange, setInRange] = useState()
    const isVisible = isInRange && !isOccluded
    // Test distance
    const vec = new THREE.Vector3()

    useFrame((state) => {
        const range = state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 10
        if (range !== isInRange) setInRange(range)
    })

    return(
        <Billboard
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)
            position={position}
            occlude
            onOcclude={setOccluded}
            style={{ transition: 'all 0.2s', opacity: isVisible ? 1 : 0, transform: `scale(${isVisible ? 1 : 0.25})` }}

        >
            <group ref={ref}>
                <Html
                    position={[0,0,0]}
                >
                    <div className="marker"/>
                </Html>
            </group>
        </Billboard>
    )
}

export default Marker;