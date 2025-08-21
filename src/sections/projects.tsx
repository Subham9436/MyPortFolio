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
    <div>
      <div
        className="flex justify-between p-2 md:flex-row flex-col items-center"
        id="work"
      >
        <a href="https://github.com/Subham9436/Gsap-Cocktails-Mojito">
          <div className="p-10">
            <div className="w-176 rounded-lg ">
              <img src="/images/Screenshot (93).png" />
            </div>
            <div className="mt-3 flex-center text-2xl">
              <p>A UI for a Mocktail Website using GSAP Animations</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="md:mr-9">
            <div className="w-176 rounded-lg ">
              <img src="/images/Screenshot (95).png" />
            </div>
            <div className="text-2xl mt-3 flex-center">
              <p>A Complete TO-DO Application</p>
            </div>
          </div>
        </a>
      </div>
      <div
        className="flex  p-2 md:flex flex-row items-center justify-center"
        id="workflow"
      >
        <div>
          <a href="https://github.com/Subham9436/Real-Time-Chat-Bot">
            <div className="p-10">
              <div className="w-176 rounded-lg ">
                <img src="/images/Screenshot (97).png" />
              </div>
              <div className="mt-3 flex-center text-2xl">
                <p>Real Time Chat Application with Socket.io </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
