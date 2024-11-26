import {useAnimations, useGLTF} from '@react-three/drei';
import {useEffect, useRef} from "react";

const PlaneModel = ({children}) => {
    const mesh = useRef()

    const { scene, animations } = useGLTF("/models/main_plane.glb"); // Load the GLTF model
    const { actions } = useAnimations(animations, mesh)

    useEffect(() => {
        if (actions) {
            if (actions["Take 001"])
                actions["Take 001"].play()
        }
    },[actions])

    return (
        <group position={[0,0,0]}>
            <primitive
                ref={mesh}
                object={scene}
                name="mesh"
            />
            {children}
        </group>
    )
}

export default PlaneModel;