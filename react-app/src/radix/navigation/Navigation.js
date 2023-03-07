import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { styled, keyframes } from "@stitches/react";
import { createStyle } from "@splitflow/designer/react";
import NavigationEntry from "./NavigationEntry";
import { style as parentStyle } from "./Navigation.sf";

const NavigationMenuDemo = () => {
  return (
    <Style.root>
      <Style.MenuList>
        <NavigationMenu.Item>
          <Style.Trigger>
            Learn <Style.CaretDown aria-hidden />
          </Style.Trigger>
          <Style.Content>
            <Style.List>
              <NavigationEntry href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </NavigationEntry>
              <NavigationEntry href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavigationEntry>
              <NavigationEntry href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </NavigationEntry>
            </Style.List>
          </Style.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Style.Trigger>
            Overview <Style.CaretDown aria-hidden />
          </Style.Trigger>
          <Style.Content>
            <Style.List layout="two">
              <NavigationEntry
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </NavigationEntry>
              <NavigationEntry
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </NavigationEntry>
              <NavigationEntry
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </NavigationEntry>
              <NavigationEntry
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </NavigationEntry>
              <NavigationEntry
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </NavigationEntry>
              <NavigationEntry
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </NavigationEntry>
            </Style.List>
          </Style.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Style.Link href="https://github.com/radix-ui">Github</Style.Link>
        </NavigationMenu.Item>

        <Style.Indicator>
          <Style.Arrow />
        </Style.Indicator>
      </Style.MenuList>

      <Style.ViewportPosition>
        <Style.Viewport />
      </Style.ViewportPosition>
    </Style.root>
  );
};

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const Style = createStyle(parentStyle, {
  root: styled(NavigationMenu.Root, {
    position: "relative",
  }),

  MenuList: styled(NavigationMenu.List, {
    display: 'flex',
    justifyContent: "center",
  }),

  Content: styled(NavigationMenu.Content, {
    position: "absolute",
    top: 0,
    left: 0,
    animationDuration: "250ms",
    animationTimingFunction: "ease",
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  }),

  Viewport: styled(NavigationMenu.Viewport, {
    position: "relative",
    transformOrigin: "top center",
    marginTop: 10,
    overflow: "hidden",
    height: "var(--radix-navigation-menu-viewport-height)",
    transition: "width, height, 300ms ease",
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
    '@media only screen and (min-width: 600px)': {
    },
  }),

  ViewportPosition: styled("div", {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "100%",
    left: 0,
    right: 0,
  }),

  CaretDown: styled(CaretDownIcon, {
    position: "relative",
    top: 1,
    transition: "transform 250ms ease",
    "[data-state=open] &": { transform: "rotate(-180deg)" },
  }),

  Trigger: styled(NavigationMenu.Trigger, {}),
  Link: styled(NavigationMenu.Link, {}),
  Indicator: styled(NavigationMenu.Indicator, {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: 1,
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  }),
  List: styled("ul", {}),

  Arrow: styled("div", {
    position: 'relative',
    top: '70%',
    width: 10,
    height: 10,
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2,
  }),

});

export default NavigationMenuDemo;
