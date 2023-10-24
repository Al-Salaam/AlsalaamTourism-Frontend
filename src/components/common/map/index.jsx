import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography,Annotation, } from "react-simple-maps";

import "../map/style.css";
import G from "../map/features.json"

const Map = () => (
  <div>
    <ComposableMap>
      <Geographies geography={G}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[23.4241, 53.8478]}
        dx={-150}
        dy={100}
        connectorProps={{
          stroke: "#3D4C84",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-2" textAnchor="end" alignmentBaseline="middle" fill="#3D4C84" style={{fontSize:"30px"}}>
          {"Uae"}
        </text>
      </Annotation>
    </ComposableMap>
  </div>
);

export default Map