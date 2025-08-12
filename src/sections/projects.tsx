import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Projects() {
  useGSAP(() => {
    gsap.fromTo(
      "#images",
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
          trigger: "#images",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      className="flex justify-between p-2 md:flex-row flex-col items-center"
      id="images"
    >
      <div className="p-10">
        <div className="w-176 rounded-lg ">
          <img src="/assets/public/images/Screenshot (93).png" />
        </div>
        <div className="mt-3 flex-center text-2xl">
          <p>A UI for a Mocktail Website using GSAP Animations</p>
        </div>
      </div>
      <div className="p-10">
        <div className="w-176 rounded-lg ">
          <img src="/assets/public/images/Screenshot (95).png" />
        </div>
        <div className="text-2xl mt-3 flex-center">
          <p>A Complete TO-DO Application</p>
        </div>
      </div>
    </div>
  );
}
