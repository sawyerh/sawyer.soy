import styles from "styles/home.module.css";
import { HeaderNav } from "../components/HeaderNav";

export default function Page() {
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
          <source src="/alabama-hills.webm" type="video/webm" />
          <source src="/alabama-hills.mp4" type="video/mp4" />
        </video>
        <span className="sr-only" id="video-alt">
          Video shows a man in a white shirt, blue pants, sunglasses, and a
          black hat. He&rsquo;s standing on red boulders looking into the
          distance.
        </span>
      </div>
      <section className="sm:w-golden-large">
        <HeaderNav className="px-md sm:px-lg" />

        <div className="px-md pb-md sm:px-lg">
          <p className="font-marker text-3xl text-terracotta-700">Heyo,</p>
          <p className="text-balance text-lg">
            I&rsquo;m a full-stack engineer specializing in frontend
            development, with a background in UX design. Coworkers have given me
            shoutouts for:
          </p>
          <ul className="font-marker">
            <li>
              Helping teams maintain momentum and focus on the highest-impact
              work
            </li>
            <li>Constructive and timely code reviews</li>
            <li>
              A calm and communicative approach in complex, ambiguous
              environments
            </li>
            <li>Creating concise roadmaps and technical plans</li>
            <li>Anticipating issues and diving deep to find solutions</li>
          </ul>
          <p className="mb-0">
            I&rsquo;m currently at <a href="https://www.navapbc.com/">Nava</a>,
            working to make government services effective and accessible. Some
            projects I&rsquo;ve worked on include:{" "}
            <a href="https://HealthCare.gov">HealthCare.gov</a>,{" "}
            <a href="https://www.navapbc.com/case-studies/integrating-eligibility-enrollment-software">
              Vermont Integrated Benefits
            </a>
            ,{" "}
            <a href="https://paidleave.mass.gov/">
              Massachusetts Paid Family{" "}
              <span className="font-marker">&amp;</span> Medical Leave
            </a>
            , and{" "}
            <a href="https://www.dol.gov/agencies/eta/ui-modernization/claims-status/example-page">
              unemployment insurance modernization at the federal
            </a>{" "}
            and state levels.
          </p>
        </div>

        <div className="bg-slate-200 p-md sm:px-lg">
          <p>
            Prior to Nava, I was at <a href="https://oak.is">Oak Studios</a>,
            where I helped lead product design and engineering on projects like{" "}
            <a href="https://creativemornings.com">CreativeMornings</a>,{" "}
            <a href="https://dropmark.com">Dropmark</a>, and{" "}
            <a href="https://siteleaf.com">Siteleaf</a>.
          </p>
          <p className="mb-0">
            Outside of my day-to-day job, I enjoy working on side projects like{" "}
            <a href="https://highlights.sawyerh.com/">
              tracking my reading highlights
            </a>
            , creating{" "}
            <a href="https://github.com/sawyerh/eslint-plugin-todo-plz">
              developer tooling
            </a>
            , <a href="https://cursor.in/">design resources</a>,{" "}
            <a href="https://chrome.google.com/webstore/detail/devtools-us-web-design-sy/pkdhffidhfklfcpockffiadeaelfflge">
              browser extensions
            </a>
            , and{" "}
            <a href="https://github.com/sawyerh">other open source projects</a>.
          </p>
        </div>
      </section>
    </div>
  );
}