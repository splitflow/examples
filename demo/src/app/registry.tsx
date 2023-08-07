"use client";

import { createSplitflowDesigner } from "@splitflow/designer";
import { SplitflowDesignerProvider } from "@splitflow/designer/react";
import { useServerInsertedHTML } from "next/navigation";
import { useRef, useState } from "react";

export default function SplitflowDesignerRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [designer] = useState(() =>
    createSplitflowDesigner({ devtool: true, ssr: true })
  );
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;

      return (
        <>
          <style type="text/css" data-splitflow-id="style">
            {designer.printStyleCss()}
          </style>
          <style type="text/css" data-splitflow-id="theme">
            {designer.printThemeCss()}
          </style>
        </>
      );
    }
  });

  return (
    <SplitflowDesignerProvider designer={designer}>
      {children}
    </SplitflowDesignerProvider>
  );
}
