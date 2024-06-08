import SocialFooter from "components/SocialFooter";
import { Metadata } from "next";
import Link from "next/link";
import { preload } from "react-dom";
import styles from "styles/home.module.css";
import { HeaderNav } from "../components/HeaderNav";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.sawyer.soy",
  },
};

export default function Page() {
  preload("/alabama-hills.mp4", {
    as: "video",
    type: "video/mp4",
    fetchPriority: "high",
  });

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          aria-describedby="video-alt"
        >
          <source src="/alabama-hills.mp4" type="video/mp4" />
        </video>
        <span className="sr-only" id="video-alt">
          Video shows a man in a white shirt, blue pants, sunglasses, and a
          black hat. He&rsquo;s standing on red boulders looking into the
          distance.
        </span>
      </div>

      <HeaderNav className={styles.header} />

      <section className={styles.main}>
        <p className="font-marker text-3xl text-terracotta-700">Heyo,</p>
        <p>
          I&rsquo;m a full-stack engineer specializing in frontend development,
          with a background in UX design. Coworkers have given me shoutouts for:
        </p>

        <ul className="font-marker">
          <li>
            Helping teams maintain momentum and focus on the highest-impact work
          </li>
          <li>Building polished UIs with extreme attention to detail</li>
          <li>
            A calm and communicative approach in complex, ambiguous environments
          </li>
          <li>Creating concise roadmaps and technical plans</li>
          <li>Anticipating issues and diving deep to find solutions</li>
        </ul>

        <Link
          href="/projects"
          className="font-bold text-terracotta-800 hover:text-terracotta-950"
        >
          Learn more about my work
        </Link>
      </section>
      <SocialFooter className={styles.footer} />
    </div>
  );
}
