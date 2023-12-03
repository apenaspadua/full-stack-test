import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.22 9.47l5.46-5.46c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.56 9.25h14.69c.41 0 .75.34.75.75s-.34.75-.75.75H3.56l4.18 4.18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-5.46-5.46a.755.755 0 010-1.06z"
        fill="#020203"
      />
    </Svg>
  )
}

export default ArrowLeft
