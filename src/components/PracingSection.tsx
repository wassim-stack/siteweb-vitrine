"use client";
import React, { useState } from "react";
import Heading from "@/components/Heading";
import { pricingItems } from "@/constants/pricing";
import PrincingCard from "@/components/PrincingCard";
import { PricingMode } from "@/types/interfaces";

const PracingSection = () => {
  const [mode, setMode] = useState<PricingMode>("monthly");
  return (
    <section id="princing" className="flex flex-col gap-8">
      <Heading title="Find a plan to power your projects" isCentered />
      <div className="max-w-[12rem] w-full mx-auto p-1 flex text-base bg-slate-800 rounded-lg">
        <p
          className={`basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${
            mode === "monthly" && "bg-sky-600"
          }`}
          onClick={() => setMode("monthly")}
        >
          monthly
        </p>
        <p
          className={`basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${
            mode === "annually" && "bg-sky-600"
          }`}
          onClick={() => setMode("annually")}
        >
          annually
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingItems.map((item, i) => (
          <PrincingCard key={i} {...item} mode={mode} />
        ))}
      </div>
    </section>
  );
};

export default PracingSection;
