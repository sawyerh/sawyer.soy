import { HeaderNav } from "components/HeaderNav";
import Link from "next/link";
import css from "./page.module.css";
import { PaidLeaveFlow } from "./PaidLeaveFlow";

const projects = [
  {
    title: "CMS Design System",
    cover: <img src="/portfolio/cms-design-system.jpg" alt="" />,
    body: (
      <p>
        I was the technical lead for the CMS Design System, now used across
        Centers for Medicare & Medicaid Services (CMS) projects such as
        HealthCare.gov, Medicare.gov, and CMS.gov. Before the team grew with
        more resources, I was the sole contributor during the initial
        development of the system, and was responsible for the system’s{" "}
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
        collections. As part of the 3-person team at Oak Studios, I helped shape
        the product vision, design, and development. In 2015, I focused on
        making the product self-sustaining, leading the creation of the Teams
        offering. I led the design and development of features like annotations,
        reactions, a new browser extension, and overall refresh of the Dropmark
        brand.
      </p>
    ),
  },
  {
    title: <>Massachusetts Paid Family &amp; Medical Leave</>,
    cover: <PaidLeaveFlow />,
    body: (
      <p>
        I served as a full-stack engineer on the team responsible for
        implementing the Massachusetts Paid Family &amp; Medical Leave
        application, a brand new state program that provides paid time off for
        workers. The team successfully launched the application within a year,
        by the legislative deadline, during the COVID-19 pandemic. I led various
        initiatives, including a migration from JavaScript to TypeScript, usage
        of Storybook to test each question page in isolation, and introduced the
        concept of{" "}
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
    cover: <img src="/portfolio/hc-gov.jpg" alt="" />,
    body: (
      <p>
        I served as an interaction designer on the team responsible for
        redesigning the HealthCare.gov eligibility and enrollment experience. I
        was responsible for solving foundational complex form design challenges,
        such as{" "}
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
          Initially designed and built in one month at Oak Studios, Siteleaf has
          grown to become a formidable CMS for static Jekyll websites. Our
          philosophy behind Siteleaf is that you should be able to host your
          website anywhere you want. That websites should be able to outlive
          their CMS. That our tools should be simplified, but not dumbed down.
        </p>
        <p>
          As part of the 4 person team, I led the design and front-end
          development of the CMS focusing on building powerful management
          controls while aiming to make it as simple and clear as possible for
          clients who may just want to update their damn site.
        </p>
      </>
    ),
  },
  {
    title: "Highlights",
    video: "/portfolio/highlights-demo.mp4",
    body: (
      <>
        <p>
          I read in iBooks and Kindle, where the highlights ecosystem isn’t
          exactly the most open. To get around this, I devised this hacky
          solution which uses Email, AWS, and Siteleaf to get a grasp on my
          highlights and share them online. This is the site where all of those
          highlights end up.
        </p>
      </>
    ),
  },
  {
    title: "CreativeMornings",
    video: "/portfolio/creativemornings-demo.mp4",
    body: (
      <p>
        CreativeMornings is a breakfast lecture series for the creative
        community, founded by Tina Roth Eisenberg. In 2012, after a successful
        Kickstarter campaign, they approached Oak Studios to help design and
        build their online presence. As part of the team, I led the design and
        front-end development of the initial CreativeMornings.com which was
        translated into 11 languages, included over 350 hours of video and an
        administrative section for hosts to manage event registration and
        content. Over time, through our ongoing relationship with
        CreativeMornings, we continued to lead the site’s development,
        supporting a site that has grown to over 100k users, over 2k videos, and
        a presence in over 130 cities across the world.
      </p>
    ),
  },
  {
    title: "Blue",
    video: "/portfolio/blue-demo.mp4",
    body: (
      <>
        <p>
          Blue was the first iOS app we launched at Oak, and was designed and
          built in one week during our yearly team getaway. Blue provides
          36-hour weather forecasts relevant to your location in a fast and fun
          interface. You can swipe up to see each hour represented in a colorful
          gradient visual, generated based on three variables: temperature,
          humidity, and sunrise/sunset times.
        </p>
        <p>
          I was responsible for conceptualizing and creating a marketing page
          for the app and decided the best way to explain the app was to show it
          in action and let it speak for itself. Over a period of 24 hours,
          using an iPad I recorded a timelapse of the Los Angeles cityscape from
          the balcony of the Airbnb we were staying at. From there I recreated
          the app’s interface in HTML & CSS, then paired a CSS animation of the
          interface with the timelapse video background, demonstrating the
          relation between weather, time, and the interface’s color gradient.
        </p>
      </>
    ),
  },
  {
    title: "Gazette",
    cover: <img src="/portfolio/gazette.jpg" alt="" />,
    body: (
      <p>
        Gazette was a product experiment I helped birth at Oak Studios. It
        allowed you to subscribe to your favorite blogs, websites, and
        publications and receive a weekly, personalized ebook to read and
        highlight on iOS, Kindle, or other device that supported ePub/Mobi
        formats. It synced issues with Readmill, Kindle, and also allowed you to
        download directly. Unfortunately it didn’t take off how we would’ve
        liked and we decided to shelve the idea in 2014 in order to focus on
        other products.
      </p>
    ),
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
              <article key={index} className="mb-28">
                <div className="mb-7">
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
                  {project.title}
                </h3>
                {project.body}
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
