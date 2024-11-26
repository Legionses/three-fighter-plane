import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

const Background = () => {
    const texture = useLoader(THREE.TextureLoader, '/textures/skybox.png');

    return(
        <mesh position={[ 0, -5.6,0]} scale={[19,19,19]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshBasicMaterial
                map={texture}
                side={THREE.BackSide}
            />
        </mesh>
    )
};

export default Background;