"use client";

import dynamic from "next/dynamic";

const BallCanvas = dynamic(() => import("./BallCanvasComponent"), {
  ssr: false,
});

export default BallCanvas;
