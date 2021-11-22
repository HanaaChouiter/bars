import { createContext, useState, useEffect } from "react"

import Bars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = props => {
    const [location, setLocation] = useState(false)
    const [bars, setBars] = useState(Bars)

    const value = {
        location: location,
        bars: bars,
    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            location => {
                console.log(location.coords)
                setLocation({
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                })
            },
            error => {
                console.log(error)
            }
        )
    }, [])


    return (
        <MapContext.Provider value={value}>
            {props.children}
            
        </MapContext.Provider>
    )
}

export {
    MapContextProvider,
    MapContext
}