import React, { useState, useRef, useEffect } from "react"
import { TweenLite, TweenMax, Linear } from "gsap"
import Image from "../components/image"

const WorkCarousel = () => {
  let workcarousel = useRef(null);
  let imagesRef = useRef([]);
  imagesRef.current = [];

  const images = [
    {
      filename: "aritaclinic1.png",
      alt: "arita clinic"
    },
    {
      filename: "aritaclinic2.png",
      alt: "arita clinic"
    },
    {
      filename: "aritaclinic3.png",
      alt: "arita clinic"
    },
    {
      filename: "aritaclinic4.png",
      alt: "arita clinic"
    }
  ]

  const addToRefs = el => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    var angle = 360 / 4;
    
    TweenLite.set(workcarousel, {
      css: {
        transformStyle: "preserve-3d"
      }
    });

    imagesRef.current.forEach((el, index) => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        TweenLite.set(el, {
          css: {
            rotationX: index * 360 / 4,
            transformOrigin: "50% 50% -120"
          }
        });

        TweenMax.to(el, 20, {
          css: {
            z:0.01,
            rotationX: "-=359"
          },
          repeat: -1,
          ease: Linear.easeNone
        });
      } else {
        var x = window.screen.width * -0.3
        TweenLite.set(el, {
          css: {
            rotationY: index * 360 / 4,
            transformOrigin: `50% 50% ${x}`
          }
        });

        TweenMax.to(el, 20, {
          css: {
            z:0.01,
            rotationY: "+=359"
          },
          repeat: -1,
          ease: Linear.easeNone
        });
      }
    });
  });

  return (
    <div className="work-carousel" ref={el => workcarousel = el}>
      {
        images.map(({filename, alt}) => (
          <div className="carousel-image" ref={addToRefs}>
            <Image filename={filename} alt={alt} />
          </div>
        ))
      }
    </div>
  )
}

export default WorkCarousel
      
