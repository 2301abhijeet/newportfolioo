import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StartProjectCTA from "./StartProjectCTA";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current!;

    // 🔥 IMPORTANT: Pause video (we control manually)
    video.pause();

    const setupScroll = () => {
      const duration = video.duration;

      gsap.to({}, {
        scrollTrigger: {
          trigger: "#section-1",
          start: "top top",
          end: "bottom top",
          scrub: 1, // smooth scroll
          onUpdate: (self) => {
            if (video.readyState >= 2) {
              video.currentTime = self.progress * duration;
            }
          }
        }
      });
    };

    // Wait for metadata
    if (video.readyState >= 1) {
      setupScroll();
    } else {
      video.addEventListener("loadedmetadata", setupScroll);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="hero-container">

      {/* 🎬 VIDEO SECTION */}
      <div className="video-container">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          {/* 🔥 Replace with your ImageKit URL */}
          <source
            src="https://ik.imagekit.io/rajaproject/abhijeet-portfolio/output.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 📝 TEXT OVERLAY */}
      <div className="fixed-text-container">
        <div className="text-container" id="text-1">
          <h2>Hello!, I am Abhijeet</h2>
          <p>Scroll to control the animation</p>
        </div>
      </div>

      {/* 📜 SCROLL AREA */}
      <main>
        <section id="section-1" className="sequence-section"></section>
      </main>

      <StartProjectCTA />
    </div>
  );
}
