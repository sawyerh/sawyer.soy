import { Video } from "./Video";

export function PaidLeaveFlow() {
  return (
    <div className="relative">
      <Video hideControls src="/portfolio/ma-pfml-demo.mp4" className="z-10" />
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-black bg-opacity-90 transition-opacity duration-700 hover:opacity-95">
        <img
          loading="lazy"
          src="/portfolio/ma-pfml-flow-dark.svg"
          alt="Flowchart with boxes and arrows. Stemming from a Checklist page, the flow goes into four different sections: identity, employer, leave, and payments."
        />
      </div>
    </div>
  );
}
