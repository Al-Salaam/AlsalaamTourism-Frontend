 
import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import "../map/style.css";
import G from "../map/features.json";

const Map = () => (
  <div>
    <ComposableMap>
      <Geographies geography={G}>
        {({ geographies }) =>
          geographies.map((geo) => {
            // Log the id property
            console.log(geo.properties.id,"hello");

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={geo.properties.name === "United Arab Emirates" ? "#3D4C84" : "#70adbb"}
              />
            );
          })
        }
      </Geographies>
      <Annotation
        subject={[50.4241, 157.8478]}
        dx={-100}
        dy={200}
        connectorProps={{
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-2" textAnchor="end" alignmentBaseline="middle" fill="#3D4C84" style={{ fontSize: "30px", fontFamily:"ubuntu" }}>
          {"UAE"}
        </text>
      </Annotation>
    </ComposableMap>
  </div>
);

export default Map;
