import * as React from "react"
const SquareFading = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" {...props}>
  <defs>
    <linearGradient
      id="a"
      x1="50%"
      x2="50%"
      y1="0%"
      y2="100%"
      gradientTransform="rotate(45 .5 .5)"
    >
      <stop offset="0%" stopColor="hsl(331, 87%, 61%)" />
      <stop offset="100%" stopColor="hsl(331, 87%, 61%)" stopOpacity={0.15} />
    </linearGradient>
  </defs>
  <g fill="hsl(331, 87%, 61%)" shapeRendering="crispEdges">
    <path fill="url(#a)" d="m0 100 50-50v700L0 800z" opacity={0.4} />
    <path fill="url(#a)" d="m0 800 50-50h700l-50 50z" opacity={0.2} />
    <path d="M50 50h700v700H50z" />
  </g>
</svg>

)
export default SquareFading
