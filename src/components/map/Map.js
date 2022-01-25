import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
import MapMarker from "./MapMarker"
import * as Trash from './../../assets/data.json'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.50773184657685,
    longitude: 4.96442,
    width: "60vw",
    height: "60vh",
    zoom: 11,
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
        {Trash.Data.map((item, index) => {
          let marker
          if (item.Soort === 'Plastic flesje' && item.Stad === 'Purmerend') {
            marker = <MapMarker
                        key={index}
                        lat={parseFloat(item.Latitude)}
                        long={parseFloat(item.Longitude)}
                      />
          }
          return marker
        })}

      </ReactMapGL>
    </div>
  )
}

export default Map