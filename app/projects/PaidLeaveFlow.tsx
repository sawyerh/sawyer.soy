export function PaidLeaveFlow() {
  return (
    <div className="relative">
      <video
        src="/portfolio/ma-pfml-demo.mp4"
        autoPlay
        loop
        muted
        className="z-10 shadow-lg"
      ></video>
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-black bg-opacity-90 transition-opacity duration-700 hover:opacity-0">
        <img src="/portfolio/ma-pfml-flow-dark.svg" alt="" />
      </div>
    </div>
  );
}
