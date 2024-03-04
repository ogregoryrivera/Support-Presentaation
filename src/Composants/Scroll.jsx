import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Ring } from "./Ring"


export const Scroll = () => {
    return(
        
        <>
        <OrbitControls enableZoom={false}/>
            <Ring />
        </>
    )
}