import React, { useState } from 'react'


function TriSvg(props) {

  const [glow1, turnOn1] = useState(false);
  const [glow2, turnOn2] = useState(false);
  const [glow3, turnOn3] = useState(false);

  let glowPath1 = null;
  let glowPath2 = null;
  let glowPath3 = null;
  let triColor1 = props.triColor1;
  let triColor2 = "gray";
  let triColor3 = "gray";

  if (glow1) {
    triColor1 = "#00d848";
    glowPath1 = <path
      className="side"
      style={{ filter: "url(#filter2)", opacity: 1 }}
      d="M 86.319114,77.451274 7.127052,214.6155 11.474074,214.5261 80.688453,94.643504 88.064227,80.473314 Z"
      id="path833-5" />
  };

  if (glow2) {
    triColor2 = "#00d848";
    glowPath2 = <path
    className="side"
    style={{ filter: "url(#filter2)", opacity: 1 }}
    d="m 90.340067,84.415704 -2.163181,4.15634 71.780144,124.326756 5.01416,8.63876 h 4.53616 z"
    id="path898-2" />
  };

  if (glow3) {
    triColor3 = "#00d848";
    glowPath3 = <path
    className="side"
    style={{ filter: "url(#filter1)", opacity: 1 }}
    d="m 13.22487,218.33 -8.341092,0.17208 -1.752865,3.03548 H 160.53218 l -1.8619,-3.20756 z"
    id="path900-2" />
  };


  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"        
        fill="gray"
        width="150mm"
        height="150mm"
        viewBox="0 70 210 200"
        version="1.1"
        id="svg8">
        <filter
          id="filter2"
          x="-0.099408836"
          width="1.1988177"
          y="-0.058961912"
          height="1.1179238">
          <feGaussianBlur
            stdDeviation="3.3687361"
            id="feGaussianBlur1902" />
        </filter>
        <filter
          id="filter1"
          x="-0.051365322"
          width="1.1027306"
          y="-2.5205972"
          height="6.0411944">
          <feGaussianBlur
            stdDeviation="3.3687361"
            id="feGaussianBlur1906" />
        </filter>
        <g id="layer2" fill="#00d848">
          {glowPath3}
          {glowPath2}
          {glowPath1}
        </g>
        <g id="layer1">
          <path
            fill={triColor3}
            onClick={() => turnOn3(!glow3)}
            className="side"
            d="m 13.22487,218.33 -8.3410919,0.17208 -1.7528649,3.03548 H 160.53217 l -1.8619,-3.20756 z"
            id="side3" />
          <path
            fill={triColor2}
            onClick={() => turnOn2(!glow2)}
            className="side"
            d="m 90.340066,84.41571 -2.16318,4.156334 71.780134,124.326766 5.01416,8.63875 h 4.53616 z"
            id="side2" />
          <path
            fill={triColor1}
            onClick={() => turnOn1(!glow1)}
            className="side"
            d="M 86.319115,77.451276 7.1270524,214.6155 11.474074,214.5261 80.688452,94.643509 88.064226,80.473315 Z"
            id="side1" />
        </g>
      </svg>
    </React.Fragment>
  )
}

export default TriSvg;