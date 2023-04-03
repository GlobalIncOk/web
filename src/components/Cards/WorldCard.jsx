import { React, useRef } from 'react'
import { VectorMap } from "react-jvectormap"


export default function WorldCard() {
  const mapRef = useRef();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ width: "100%", height: "100vh" }}>
        <VectorMap
          ref={mapRef}
          // zoomOnScroll={false}
          // zoomButtons={false}
          map={"world_mill"}
          backgroundColor="#5786FF"
          containerStyle={{
            width: "100%",
            height: "100%"
          }}
          markerStyle={{
            initial: {
              fill: "#5E32CA",
              stroke: "#383f47"
            }
          }}
          containerClassName="map"
          series={{
            regions: [
              {
                scale: ["#E2AEFF", "#5E32CA"],
                attribute: "fill",
                values: { SG: 100, IN: 100 },
                normalizeFunction: "polynomial",
                min: 0,
                max: 100
              }
            ]
          }}
          // seri/
          markers={[
            {
              latLng: [1.3521, 103.8198],
              name: "Singapore"
            }
          ]}
          regionStyle={{
            initial: {
              fill: "#ABC3FF",
              "fill-opacity": 1,
              stroke: "#265cff",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              fill: "",
              stroke: "#2b2b2b"
            }
          }}
          onRegionTipShow={function (event, label, code, ...props) {
            console.log("-----> ", label.html(), event, label, code, props);
            label.html(
              '<div style="background-color: white; border: 1px solid white; outline: 10px solid white; border-radius: 5px; min-height: 70px; width: 150px; color: black"; padding-left: 10px>' +
                "<p>" +
                "<b>" +
                label.html() +
                "</b>" +
                "</p>" +
                "<p>" +
                "Count: " +
                "<b> Count</b>" +
                "</p>" +
                "</div>"
            );
          }}
        />
      </div>
    </div>
  );
}
