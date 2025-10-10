"use client";
import React from "react";
import { AnimatedTooltip } from "@components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Guido Formichi",
    designation: "IUSS Pavia",
    image:
      "/images/crew/guido.png",
  },
  {
    id: 13,
    name: "Albina Mukusheva",
    designation: "IUSS Pavia",
    image:
     "/images/crew/albina.png" },

  {
    id: 2,
    name: "Sofia Neri",
    designation: "IUSS Pavia",
    image:
      "/images/crew/sofia.png",
  },
  {
    id: 3,
    name: "Sarah Rossi",
    designation: "IUSS Pavia",
    image:
    "/images/crew/sarah.jpeg"},
  {
    id: 4,
    name: "Tommaso Sgrizzi",
    designation: "IUSS Pavia",
    image:
    "/images/crew/tom.png"},
  {
    id: 5,
    name: "Asya Zanollo",
    designation: "IUSS Pavia",
    image:
     "/images/crew/asya.png" },
  
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
