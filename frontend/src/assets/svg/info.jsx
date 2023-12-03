import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Info(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 13.28c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM10 5.22c-.41 0-.75.34-.75.75v4.92a.749.749 0 101.5 0V5.97c0-.41-.34-.75-.75-.75z"
        fill="red"
      />
      <Path
        d="M10 19c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm0-16.5c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5z"
        fill="red"
      />
    </Svg>
  )
}

export default Info
