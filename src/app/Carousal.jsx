"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function Carousel({
  children,
  className,
  slidesToShow,
  autoplaySpeed,
  speed,
  arrows,
  dots,
}) {
  const settings = {
    infinite: true,
    speed: speed === undefined ? 500 : speed,
    slidesToShow,
    cssEase: "linear",
    arrows: arrows === undefined ? false : arrows,
    dots: dots === undefined ? false : dots,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: autoplaySpeed === undefined ? 3000 : autoplaySpeed, // Set the autoplay speed in milliseconds (e.g., 3000ms or 3 seconds)
  };

  return (
    <Slider {...settings} className={`${className}`}>
      {children}
    </Slider>
  );
}
