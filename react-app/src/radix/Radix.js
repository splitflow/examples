import React from "react";
import * as Label from "@radix-ui/react-label";
import { styled } from "@stitches/react";
import { createStyle } from "@splitflow/designer/react";
import Navigation from "./navigation/Navigation";
import { style as parentStyle } from "./Radix.sf";

function Radix() {
  return (
    <Style.root>
      <Navigation />
      <div>
        <Style.Label className="test" htmlFor="firstName">
          First Name
        </Style.Label>
        <input type="text" id="firstName" />
      </div>
    </Style.root>
  );
}

const Style = createStyle(parentStyle, {
  root: "section",
  Label: styled(Label.Root, {
    padding: "2rem",
  }),
});

export default Radix;
