import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoidG9tdmRiMTEiLCJhIjoiY2t4ZWlqZGZxMG84ZTJzbjR1OXF3ZDIzdSJ9.IuJfOfjVQC6gG0oaNBbX_w"

const App = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(4.96)
  const [lat, setLat] = useState(52.51)
  const [zoom, setZoom] = useState(12)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    })
  })

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default App
