import { HeaderNav } from "components/HeaderNav";
import Link from "next/link";
import css from "./page.module.css";
import { PaidLeaveFlow } from "./PaidLeaveFlow";

function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, "-");
}

const projects = [
  {
    title: "CMS Design System",
    cover: (
      <img
        src="/portfolio/cms-design-system.jpg"
        alt="Screenshot of a Step List component documentation, overlaid with a brand colors documentation snippet."
      />
    ),
    body: (
      <p>
        I was the tech lead for the Centers for Medicare & Medicaid Services
        (CMS) Design System. Initially built for HealthCare.gov, it’s also now
        in use on sites like Medicare.gov and CMS.gov. I was the sole
        contributor during the initial development of the system, and was
        responsible for the system’s{" "}
        <a
          href="https://www.navapbc.com/insights/building-design-system-healthcare-gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS and React architecture, documentation, and implementation
        </a>
        .
      </p>
    ),
  },
  {
    title: "Dropmark",
    subheading: <a href="https://dropmark.com">dropmark.com</a>,
    video: "/portfolio/dropmark-demo.mp4",
    body: (
      <p>
        Dropmark helps organize all your links, files, and notes into visual
        collections. As part of the 4-person team at Oak Studios, I helped shape
        the product vision, design, and development. In 2015, I focused on
        making the product self-sustaining, leading the creation of the Teams
        offering. I led the design and development of features like annotations,
        reactions, a new browser extension, and overall refresh of the Dropmark
        brand.
      </p>
    ),
  },
  {
    title: "Massachusetts Paid Family &amp; Medical Leave",
    cover: <PaidLeaveFlow />,
    body: (
      <p>
        I was a full-stack engineer on the team responsible for implementing the
        Massachusetts Paid Family &amp; Medical Leave application, a brand new
        state program that provides paid time off for workers. The team
        successfully launched the application within a year, by the legislative
        deadline, during the COVID-19 pandemic. I led various initiatives,
        including a migration from JavaScript to TypeScript, usage of Storybook
        to test each question page in isolation, and introduced the concept of{" "}
        <Link href="/blog/routing-with-state-machines">
          using a state machine to manage the complex multi-step application
          flow
        </Link>
        , allowing the team to visualize the implemented logic.
      </p>
    ),
  },
  {
    title: "HealthCare.gov",
    cover: (
      <img
        src="/portfolio/hc-gov.jpg"
        alt="Screenshot of HealthCare.gov. Page heading shows: Complete these steps to apply for & enroll in health coverage."
      />
    ),
    body: (
      <p>
        I was an interaction designer on the team redesigning the HealthCare.gov
        eligibility and enrollment experience. I was responsible for solving
        complex form design challenges, such as{" "}
        <a href="https://www.navapbc.com/insights/form-design-approaches">
          downstream effects & nonlinear navigation
        </a>
        ,{" "}
        <a href="https://www.navapbc.com/insights/structuring-complex-eligibility-form-healthcare">
          question sequencing
        </a>{" "}
        and{" "}
        <a href="https://www.navapbc.com/insights/providing-guidance-healthcare-gov-applicants">
          help and guidance
        </a>{" "}
        patterns.
      </p>
    ),
  },
  {
    title: "Siteleaf",
    video: "/portfolio/siteleaf-ux.mp4",
    body: (
      <>
        <p>
          Initially designed and built in one month at Oak Studios, Siteleaf is
          a CMS for static Jekyll websites. As part of the 4-person team, I led
          the design and frontend development, building the bulk of the
          frontend, including a WYSIWYG markdown editor and smart metadata
          controls that adjust based on the name of the field.
        </p>
      </>
    ),
  },
  {
    title: "Highlights",
    video: "/portfolio/highlights-demo.mp4",
    body: (
      <p>
        As a side project, I designed and built tooling to help track, share,
        and search my reading highlights. Using the project as a learning
        playground, I’ve built a robust serverless architecture for importing
        highlights, fetching book metadata, and{" "}
        <Link href="/blog/semantic-search-for-reading-highlights">
          generating text embeddings to support semantic search and
          summarization
        </Link>
        .
      </p>
    ),
  },
  {
    title: "CreativeMornings",
    video: "/portfolio/creativemornings-demo.mp4",
    body: (
      <p>
        CreativeMornings is a breakfast lecture series for the creative
        community. As part of a small 3-person consulting team, I led the design
        and frontend development of the initial CreativeMornings.com website.
        The site was translated into 11 languages, included over 350 hours of
        video and an administrative section for hosts to manage event
        registration and content. I was responsible for a number of
        interactions, from the login form dropping off the page when you log in,
        raining hearts when you like a video, tagging quotes within videos, and
        a custom interactive map showing all chapter locations.
      </p>
    ),
  },
  {
    title: "Blue",
    video: "/portfolio/blue-demo.mp4",
    body: (
      <>
        <p>
          Blue was a weather app we launched at Oak Studios, and was designed
          and built in one week during our yearly team getaway. I was
          responsible for conceptualizing and creating a marketing page for the
          app and decided the best way to explain the app was to show it in
          action and let it speak for itself. Over a period of 24 hours, I
          recorded a timelapse overlooking Los Angeles. From there I recreated
          the app’s interface in HTML & CSS, then paired a CSS animation of the
          interface with the timelapse, demonstrating the relation between
          weather, time, and the interface’s color gradient.
        </p>
      </>
    ),
  },
  {
    title: "Gazette",
    cover: (
      <img
        src="/portfolio/gazette.jpg"
        alt="Webpage screenshot showing an iPad with a multi-column article."
      />
    ),
    body: (
      <p>
        Gazette was a product I conceptualized and built the frontend for while
        at Oak Studios. It allowed you to subscribe to your favorite blogs,
        websites, and publications and receive a weekly, personalized ebook to
        read and highlight on iOS, Kindle, or Android. It synced issues with
        Readmill, Kindle, and also allowed you to download directly.
      </p>
    ),
  },
];

const openSourceProjects = [
  {
    title: "eslint-plugin-todo-plz",
    body: <p>Enforce consistent and maintainable TODO comments</p>,
    url: "https://github.com/sawyerh/eslint-plugin-todo-plz",
  },
  {
    title: "eslint-plugin-no-node-env",
    body: <p>Prevent usage of NODE_ENV</p>,
    url: "https://github.com/sawyerh/eslint-plugin-no-node-env",
  },
  {
    title: "cursor.in",
    body: <p>SVG Mac cursor icon downloads</p>,
    url: "https://cursor.in/",
  },
  {
    title: "DevTools: U.S. Web Design System (USWDS)",
    body: (
      <p>Learn what U.S. Web Design System components are in use on a page</p>
    ),
    url: "https://chromewebstore.google.com/detail/devtools-us-web-design-sy/pkdhffidhfklfcpockffiadeaelfflge",
  },
  {
    title: "Raycast: Type Snob",
    body: <p>Find the correct typographic character</p>,
    url: "https://www.raycast.com/sawyerh/type-snob",
  },
];

export default function Page() {
  return (
    <>
      <HeaderNav className="wrapper" />
      <main>
        <section className="wrapper">
          <h1 className="text-3xl text-terracotta-800">
            Projects I&rsquo;ve worked on
          </h1>
          <p className="mb-14 text-xl leading-relaxed">
            With over a decade of experience, I’ve worn many hats, ranging from
            UX and Product Design, Frontend, and Backend. Projects I’ve worked
            on have ranged from government digital service modernization,
            consumer-facing websites, developer and designer tools, and
            open-source software.
          </p>
        </section>

        <h2 className="wrapper mb-7 font-marker text-xl">
          Selected works from 2007&ndash;2024 ↓
        </h2>

        <section className="bg-moss-900 py-14">
          <div className={`wrapper text-slate-100 ${css.projects}`}>
            {projects.map((project, index) => (
              <article
                key={index}
                className="mb-28"
                id={slugifyTitle(project.title)}
              >
                <div className={`${css["project__cover"]} mb-7`}>
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="shadow-lg"
                    ></video>
                  ) : (
                    project.cover
                  )}
                </div>
                <h3 className="text-2xl text-terracotta-300">
                  <span dangerouslySetInnerHTML={{ __html: project.title }} />
                  <a
                    href={`#${slugifyTitle(project.title)}`}
                    className="relative -top-0.5 ml-2 inline-block text-lg font-normal text-moss-500 no-underline"
                  >
                    #
                  </a>
                </h3>
                <div className={css["project__body"]}>{project.body}</div>
              </article>
            ))}
          </div>

          <h2 className="wrapper mb-6 font-marker text-xl text-slate-100">
            My open-source projects ↓
          </h2>

          <div className="wrapper mb-24 grid grid-cols-3 gap-6 text-slate-100">
            {openSourceProjects.map((project, index) => (
              <article key={index} className="bg-moss-950 p-6">
                <h3 className="text-base font-normal">
                  <a
                    href={project.url}
                    className="text-terracotta-300 underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className={`text-sm ${css["os__body"]}`}>
                  {project.body}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
