import classNames from "classnames";
import { HeaderNav } from "components/HeaderNav";
import { Suspense } from "react";
import styles from "styles/blog-post-list.module.css";
import Articles from "./Articles";
import Links from "./Links";

export default async function Page() {
  return (
    <div className="sm:flex">
      <div className="relative min-h-screen border-l-moss-800 border-t-moss-800 px-md sm:w-golden-large sm:border-l-8 sm:border-t-8 md:px-lg">
        <HeaderNav />
        <video
          className={styles["desk-illustration"]}
          autoPlay
          loop
          muted
          playsInline
          role="presentation"
        >
          <source src="/illo-writing.webm" type="video/webm" />
          <source src="/illo-writing.mp4" type="video/mp4" />
        </video>
        <h1 className={classNames(styles["section-heading"], "mb-md")}>
          My latest posts
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Articles />
        </Suspense>
      </div>

      <div className={styles["linkroll"]}>
        <h2 className={styles["section-heading"]}>Linkroll</h2>
        <p>Things shaping my perspective as an engineer</p>
        <Suspense fallback={<div>Loading...</div>}>
          <Links />
        </Suspense>
      </div>
    </div>
  );
}
