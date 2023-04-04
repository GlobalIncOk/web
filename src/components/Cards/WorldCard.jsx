import { React, useRef } from 'react'
import { VectorMap } from "react-jvectormap"
import '../../styles/WorldCard.sass'

export default function WorldCard() {
  const mapRef = useRef();
  const clientsData = {
    US: 2,
    AR: 5,
  };

  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <VectorMap
          ref={mapRef}
          zoomButtons={false}
          map={"world_mill"}
          backgroundColor="transparent"
          containerStyle={{
            width: "100%",
            height: "100%"
          }}
          markerStyle={{
            initial: {
              fill: "white",
              stroke: "#252525"
            }
          }}
          containerClassName="map"
          series={{
            regions: [
              {
                scale: ["#252525"],
                attribute: "fill",
                values: clientsData,
                normalizeFunction: "polynomial",
                min: 0,
                max: 100
              }
            ]
          }}
          // series/
          markers={[
            {
              latLng: [-34.603722, -58.381592],
              name: "Buenos Aires",
              style: { fill: "#FF9800", stroke: "#FF9800" }
            },
            {
              latLng: [25.793449, -80.191788],
              name: "Miami",
              style: { fill: "#FF9800", stroke: "#FF9800" }
            }
          ]}
          regionStyle={{
            initial: {
              fill: "#ABC3FF",
              "fill-opacity": 1,
              stroke: "#ABC3FF",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 1,
              fill: "#2B437F",
              stroke: "#2B437F"
            }
          }}
          onRegionTipShow={function (event, label, code, ...props) {
            label.html(
              '<div style="background-color: white; border: 1px solid white; outline: 10px solid white; border-radius: 5px; min-height: 70px; width: 150px; color: black"; padding-left: 10px>' +
                "<b>" +
                label.html() +
                "</b>" +
                "<p>" +
                "Clients: " +
                "<b>" +
                clientsData[code] +
                "</b>" +
                "</p>" +
                "</div>"
            );
          }}
        />
      </div>
    </div>
  );
}
