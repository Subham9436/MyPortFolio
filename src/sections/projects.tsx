import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Projects() {
  useGSAP(() => {
    gsap.fromTo(
      "#work",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#work",
          start: "top 90%",

          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      "#workflow",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#work",
          start: "top 90%",

          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-4">
  {/* Top projects */}
  <div
    className="flex flex-col sm:flex-row justify-between gap-8 p-4"
    id="work"
  >
    <a
      href="https://github.com/Subham9436/Gsap-Cocktails-Mojito"
      className="flex-1"
    >
      <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src="/images/Screenshot (93).png"
          alt="Mocktail Website"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-3 text-center text-lg sm:text-xl font-medium">
        <p>A UI for a Mocktail Website using GSAP Animations</p>
      </div>
    </a>

    <a href="" className="flex-1">
      <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src="/images/Screenshot (95).png"
          alt="To-Do Application"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-3 text-center text-lg sm:text-xl font-medium">
        <p>A Complete TO-DO Application</p>
      </div>
    </a>
  </div>

  {/* Bottom project */}
  <div
    className="flex justify-center p-4"
    id="workflow"
  >
    <a
      href="https://github.com/Subham9436/Real-Time-Chat-Bot"
      className="max-w-lg w-full"
    >
      <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src="/images/Screenshot (97).png"
          alt="Chat App"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-3 text-center text-lg sm:text-xl font-medium">
        <p>Real Time Chat Application with Socket.io</p>
      </div>
    </a>
  </div>
</div>

  );
}
