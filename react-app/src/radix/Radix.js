import React from "react";
import * as Label from "@radix-ui/react-label";
import { styled } from "@stitches/react";
import { createStyle } from "@splitflow/designer/react";
import Navigation from "./navigation/Navigation";
import { style as sfStyle } from "./Radix.sf";

function Radix() {
  return (
    <Style.root>
      <Navigation />
      <Style.Record>
        <Style.Label htmlFor="radix">Radix</Style.Label>
        <Style.Input
          type="text"
          id="radix"
          placeholder="https://www.radix-ui.com/"
        />
      </Style.Record>
      <Style.Record>
        <Style.Label htmlFor="stitches">Stitches</Style.Label>
        <Style.Input
          type="text"
          id="stitches"
          placeholder="https://stitches.dev/"
        />
      </Style.Record>
      <Style.Record>
        <Style.Label htmlFor="splitflow">SplitFlow</Style.Label>
        <Style.Input
          type="text"
          id="splitflow"
          placeholder="https://splitflow.io/"
        />
      </Style.Record>
    </Style.root>
  );
}

const Style = createStyle(sfStyle, {
  root: "section",
  Record: "div",
  Label: Label.Root,
  Input: styled("input", {
    marginLeft: "20px",
  }),
});

export default Radix;
