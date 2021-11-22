import { useContext } from "react"
import { MapContext } from "../contexts/Map"

const Markeur = () => {
    const { bars } = useContext(MapContext)

    return(
        <>
        {bars.map(bar =>
        <div>
            <h1>{bar.name}</h1>
        </div>
        )}
        </>
    )

}

export default Markeur