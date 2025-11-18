"use client";

import { useEffect } from "react";

export default function SkyscannerWidget() {
  useEffect(() => {
    // Make sure the widget reloads on mount
    // @ts-ignore
    if (typeof window !== "undefined" && window.Skyscanner) {
      // @ts-ignore
      window.Skyscanner.load();
    }
  }, []);

  return (
    <div
      data-skyscanner-widget="MultiVerticalWidget"
      style={{ minHeight: "400px" }}
    ></div>
  );
}
