import React, { useState, useEffect } from "react"
import { Marker, Popup } from "react-map-gl"
import styled from "styled-components"

const Title = styled.h2`
  font-family: "Righteous", cursive;
`

const Text = styled.p`
  font-family: "Roboto", sans-serif;
`

const MapMarker = ({ key, lat, long, title, subtitle }) => {
  const [selectedPark, setSelectedPark] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <>
      <Marker key={key} latitude={lat} longitude={long}>
        <button
          className="marker-btn"
          onClick={(e) => {
            e.preventDefault()
            setSelectedPark(true)
          }}
        >
          <img src="https://freesvg.org/img/nepasjeter.png" alt="Trash Icon" />
        </button>
      </Marker>
      {selectedPark && (
        <Popup
          latitude={lat}
          longitude={long}
          onClose={() => {
            setSelectedPark(false)
          }}
        >
          <div style={{ padding: 10 }}>
            <Title>{title}</Title>
            <Text>{subtitle}</Text>
          </div>
        </Popup>
      )}
    </>
  )
}

export default MapMarker