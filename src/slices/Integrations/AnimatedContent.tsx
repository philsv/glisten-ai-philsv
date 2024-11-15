"use client";

import React from "react";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import { BiBrightness } from "react-icons/bi";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.IntegrationsSlice;
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          // First keyframe (brighten and fade in)
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          // Second keyframe (fade out)
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      }),
        tl.to(
          ".signal-line",
          {
            // Second keyframe (brighten and fade in)
            keyframes: [
              { backgroundPosition: "0% 0%" },
              {
                backgroundPosition: "100% 100%",
                stagger: { from: "center", each: 0.3 },
                duration: 1,
              },
            ],
          },
          "-=1.4",
        );
      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                each: 0.3,
                from: "center",
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                each: 0.3,
                from: "center",
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      className="mt-20 flex flex-col items-center md:flex-row"
      ref={container}
    >
      {slice.primary.integration.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(slice.primary.integration.length / 2) && (
            <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icon && icons[item.icon]}
          </div>
          {index !== slice.primary.integration.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.integration.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
