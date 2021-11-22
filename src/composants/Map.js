import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Markeur from './Marker'

import { useContext } from "react"
import { MapContext } from "../contexts/Map"

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
    const { location } = useContext(MapContext)

    if (!location) {
        return <p>Chargement...</p>
    }

    return (
        <>
            <h3>hello</h3>
            <Markeur />
            <MapContainer >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location}
                    defaultZoom={10}
                >

                </GoogleMapReact>
            </MapContainer>

        </>

    )

}

export default Map