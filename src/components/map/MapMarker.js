import React from "react"
import { Marker } from "react-map-gl"

const MapMarker = ({ key, lat, long }) =>
      <Marker key={key} latitude={lat} longitude={long}>
        <div className="marker-btn"></div>
      </Marker>

export default MapMarker