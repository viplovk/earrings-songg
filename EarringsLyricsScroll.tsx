"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

const EarringsLyricsScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [487, 0]);
  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  const lyrics = `Her love is in your head
You lost your earrings in her bed
You couldn't tell her that you lost 'em
'Cause you're scared and you're not talking
So you think of what to say
Then save it for another day
'Cause you just never had the heart
Now they just drift further apart

From you, oh
From you, oh
From you, oh
From you, oh

Her love is in your head
You lost your earrings in her bed
You couldn't tell her that you lost 'em
'Cause you're scared and you're not talking
So you think of what to say
Then save it for another day
'Cause you just never had the heart
Now they just drift further apart

(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it
(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it
(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it
(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it

From you, oh
From you, oh

(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it
(From you, oh) Extra, extra, read all about it
Mac is in his feelings and he can't get out of it
Can't get out of it, can't get out of it

Okay, well, I hope you like my mixtape`;

  return (
    <ReactLenis root>
      <div
        ref={targetRef}
        className="relative z-0 h-[300vh] w-screen bg-[#f5f4f3] text-slate-900"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-slate-900">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-slate-900 after:to-transparent after:content-['']">
            scroll down to see
          </span>
        </div>
        <div
          className="sticky top-0 mx-auto flex items-center justify-center bg-transparent py-20"
          style={{
            transformStyle: "preserve-3d",
            perspective: "200px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="font-geist w-full max-w-4xl px-4 text-center text-5xl md:text-6xl font-bold tracking-tight text-slate-800 whitespace-pre-wrap"
          >
            {lyrics}
            <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-[#f5f4f3]" />
          </motion.div>
        </div>
      </div>
    </ReactLenis>
  );
};

export { EarringsLyricsScroll };

/**
 * PerspectiveTextScroll — React + framer motion + lenis
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */