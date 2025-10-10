"use client";
import React from "react";
import { AnimatedTooltip } from "@components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Alessandra Algieri",
    designation: "IMT Lucca",
    image:
      "/images/crew/alessandra.jpg",
  },
  {
    id: 2,
    name: "Giorgia Bontempi",
    designation: "IMT Lucca",
    image:
      "/images/crew/giorgia.png",
  },
  {
    id: 3,
    name: "Francesca Collesei",
    designation: "IMT Lucca",
    image:
    "/images/crew/francesca.png"},
  {
    id: 4,
    name: "Valentina Elce",
    designation: "IMT Lucca",
    image:
    "/images/crew/elce.png"},
    {
      id: 5,
      name: "Guido Formichi",
      designation: "IUSS Pavia",
      image:
        "/images/crew/guido.png",
    },
    {
      id: 6,
      name: "Erica Iob",
      designation: "IMT Lucca",
      image:
       "/images/crew/erica.png" },
       {
        id: 13,
        name: "Albina Mukusheva",
        designation: "IUSS Pavia",
        image:
         "/images/crew/albina.png" },   
    {
      id: 7,
      name: "Sofia Neri",
      designation: "IUSS Pavia",
      image:
        "/images/crew/sofia.png",
    },
    {
      id: 8,
      name: "Sarah Rossi",
      designation: "IUSS Pavia",
      image:
      "/images/crew/sarah.jpeg"},
    {
      id: 9,
      name: "Tommaso Sgrizzi",
      designation: "IUSS Pavia",
      image:
      "/images/crew/tom.png"},
    {
      id: 10,
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
