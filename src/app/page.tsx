import Link from "next/link";
import styles from "./home.module.css";

export default function Page() {
  const showNav = process.env.NODE_ENV === "development";

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <video
          className={styles.video}
          src="/alabama-hills.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-describedby="video-alt"
        />
        <span className="sr-only" id="video-alt">
          Video shows a man in a white shirt, blue pants, sunglasses, and a
          black hat. He&rsquo;s standing on red boulders looking into the
          distance.
        </span>
      </div>
      <section className="grow">
        <nav className="px-md sm:px-lg">
          <Link
            href="/"
            className="mr-4 inline-block py-4 font-semibold no-underline"
          >
            Sawyer Hollenshead{" "}
            {showNav && <span className="font-marker">→</span>}
          </Link>
          {showNav && (
            <>
              <Link
                className="inline-block px-2 py-4 text-slate-700"
                href="/notes"
              >
                Writing
              </Link>
              <Link
                className="inline-block px-2 py-4 text-slate-700"
                href="/notes"
              >
                Learning
              </Link>
              <Link
                className="inline-block px-2 py-4 text-slate-700"
                href="/notes"
              >
                Socializing
              </Link>
            </>
          )}
        </nav>

        <div className="p-md py-md sm:px-lg">
          <p className="font-marker text-3xl text-terracotta">Heyo,</p>
          <p className="text-balance text-lg">
            I&rsquo;m a full-stack engineer specializing in frontend
            development, with a background in UX design. Coworkers have given me
            shoutouts for:
          </p>
          <ul className="list-item-marker list-none font-marker">
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
