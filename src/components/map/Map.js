import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
import MapMarker from "./MapMarker"

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.50773184657685,
    longitude: 4.96442,
    width: "60vw",
    height: "60vh",
    zoom: 12,
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >
        <MapMarker
          key={1}
          lat={52.485769}
          long={4.950773}
          title="McDonalds"
          subtitle="Dit is de McDonalds van Purmerend"
        />
        <MapMarker
          key={2}
          lat={52.51487350463867}
          long={4.958380699157715}
          title="Overwhere Zuid"
          subtitle="Dit is de wijk Overwhere Zuid"
        />
      </ReactMapGL>
    </div>
  )
}

export default Map
