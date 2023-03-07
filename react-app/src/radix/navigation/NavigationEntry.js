import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { css } from "@stitches/react";
import { createStyle } from "@splitflow/designer/style";
import { style } from "./NavigationEntry.sf";

const NavigationEntry = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <li className={style.root()}>
      <NavigationMenu.Link asChild>
        <a className={style.link()} {...props} ref={forwardedRef}>
          <h1 className={style.heading()}>{title}</h1>
          <p className={style.text()}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationEntry;
