import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Ring } from "./Ring"


export const Scroll = () => {
    return(
        
        /*------- Empêche de zoomer sur le modèle 3D ------*/
        <>
        <OrbitControls enableZoom={false}/>
            <Ring />
        </>
    )
}