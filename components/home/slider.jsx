import React from 'react'
import { Carousel } from "@material-tailwind/react";
export default function Slider() {
  return (
    <Carousel autoplay loop
    className="rounded-xl"
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src="/1.jpg"
      alt="image 1"
      className="h-full w-full  object-center object-cover"
    />
      <img
      src="/2.jpg"
      alt="image 1"
      className="h-full w-full  object-center object-cover"
    />
      <img
      src="/3.jpg"
      alt="image 1"
      className="h-full w-full  object-center object-cover"
    />
      <img
      src="/4.jpg"
      alt="image 1"
      className="h-full w-full  object-center object-cover"
    />
      <img
      src="/5.jpg"
      alt="image 1"
      className="h-full w-full  object-center object-cover"
    />
  </Carousel>
  )
}
