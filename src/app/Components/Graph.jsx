import Image from "next/image";
import React from "react";
import graph from "@/app/assets/graph.svg";

const Graph = () => {
  return (
    <div className="flex justify-center mt-20 mb-20">
      <Image
        src={graph}
        alt="graph"
        width={500}
        height={500}
        className="w-[90%]"
      />
    </div>
  );
};

export default Graph;
