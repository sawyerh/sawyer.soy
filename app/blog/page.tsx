import classNames from "clsx";
import { HeaderNav } from "components/HeaderNav";
import { Suspense } from "react";
import styles from "styles/blog-post-list.module.css";
import Articles from "./Articles";
import Links from "./Links";

export default async function Page() {
  return (
    <div className="sm:flex">
      <div className="relative min-h-screen border-l-moss-800 border-t-moss-800 px-sm sm:w-golden-large sm:border-l-8 sm:border-t-8 md:px-md">
        <HeaderNav />
        <video
          className={styles["desk-illustration"]}
          autoPlay
          loop
          muted
          playsInline
          role="presentation"
        >
          <source src="/illo-writing.mp4" type="video/mp4" />
        </video>
        <h1 className={classNames(styles["section-heading"], "mb-md")}>
          My latest posts
        </h1>
        {/* Likely not necessary since we're exporting as a static site */}
        <Suspense fallback={<div>Loading...</div>}>
          <Articles />
        </Suspense>
      </div>

      <div className={styles["linkroll"]}>
        <h2 className={styles["section-heading"]}>Linkroll</h2>
        <p>Things shaping my perspective as an engineer</p>
        {/* Likely not necessary since we're exporting as a static site */}
        <Suspense fallback={<div>Loading...</div>}>
          <Links />
        </Suspense>

        <a
          href="https://highlights.sawyerh.com"
          className="mt-sm inline-block text-terracotta-100 hover:text-terracotta-200"
        >
          View the books I&rsquo;m reading{" "}
          <span className="font-marker">↗</span>
        </a>
      </div>
    </div>
  );
}
