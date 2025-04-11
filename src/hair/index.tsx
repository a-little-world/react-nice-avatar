import React from "react";

import Buzz from "./buzz";
import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";

export default function hair(props: { style: string, color: string }): SVGElement {
  const { style, color } = props;
  switch (style) {
    case "buzz": return <Buzz color={color} />;
    case "thick": return <Thick color={color} />;
    case "mohawk": return <Mohawk color={color} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "normal":
    default:
      return <Normal color={color} />;
  }
}
