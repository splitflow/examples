import { css, keyframes } from "@stitches/react";
import { createStyle } from "@splitflow/designer/style";
import logo from "./logo.svg";
import { style as sfStyle } from "./App.sf";

function App() {
  return (
    <div className={style.root()}>
      <header className={style.header()}>
        <img src={logo} className={style.logo()} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={style.link()} href="radix">
          Radix example
        </a>
      </header>
    </div>
  );
}

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const style = createStyle(sfStyle, {
  header: css({
    minHeight: "100vh",
  }),
  logo: css({
    animation: `${spin} infinite 20s linear`,
  }),
});

export default App;
