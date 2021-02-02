import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Sawyer Hollenshead is a senior designer and frontend developer"
        />
        <title>
          Sawyer Hollenshead (@sawyerh): Designer and frontend developer
        </title>
      </Head>

      <section className="u-margin-top--10">
        <p className="lead u-text-align--center">
          <strong>Sawyer Hollenshead</strong> is a senior designer &amp;
          frontend developer at Nava&nbsp;PBC, building government services that
          are effective and accessible to all. I&rsquo;m interested in
          researching, prototyping, designing, and building practical,
          purpose-driven digital services.
        </p>
      </section>

      <section>
        <h1 className="heading u-margin-y--10">
          Here&rsquo;s what I&rsquo;ve been working on
        </h1>

        <article className="project project--vermont">
          <div className="project__body">
            <h2 className="project__title">
              State of Vermont: Integrated Eligibility &amp; Enrollment Program
            </h2>
            <p className="project__subtitle u-margin--0">
              Modernizing and simplifying the process of applying to fragmented
              safety net programs.
            </p>
            <p>
              The vision for Vermont&rsquo;s Agency of Human Services&rsquo;
              Integrated Eligibility &amp; Enrollment Program is to ensure that
              Vermonters can easily gain and maintain access to the benefits
              that they&rsquo;re eligible for, like Medicaid and food
              assistance. Sounds straightforward, but integrating these programs
              is a massive undertaking. In almost every state, the benefits
              application experience is fragmented. Applicants have different
              applications for each program, different numbers to call, and
              different offices to visit. Staff have siloed systems and manual,
              repetitive processes. Nava&rsquo;s partnership with Vermont on
              this initiative has so far included two phases&hellip;
            </p>
          </div>

          <div className="project__details">
            <div className="project__details__col">
              <p>
                <strong>Phase 1</strong> was a &ldquo;document uploader,&rdquo;
                focused on helping Vermonters submit documentation that proves
                their eligibility. By the end of Phase 1, the document uploader
                was fully integrated with the State&rsquo;s on-premise document
                management system and was available to 100% of Vermont’s
                benefits programs. A much higher percentage of Vermonters are
                now submitting documents on the same day as the request, and
                applicants are receiving eligibility determinations and their
                benefits many days (and sometimes weeks) sooner.
              </p>
            </div>

            <div className="project__details__col">
              <p>
                <strong>Phase 2</strong> of this work is now underway, and the
                goal for this phase is to build an MVP of an integrated online
                application that will ultimately provide a single application
                experience to Vermonters applying for any human services
                program. This work is building on a lot of our team&rsquo;s
                experience working on HealthCare.gov&rsquo;s application
                experience.
              </p>
            </div>
          </div>

          <h3 className="heading project__links__heading">
            Read more about this work
          </h3>
          <ul className="project__links">
            <li>
              <a
                className="project__link"
                href="https://www.navapbc.com/2018-public-benefit-report/"
              >
                Nava’s 2018 Public Benefit Report
              </a>
            </li>
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/simplifying-the-social-safety-net-ad0e99815ed0"
              >
                Simplifying the social safety net
              </a>
            </li>
            <li>
              <a
                className="project__link"
                href="https://github.com/VermontAHS/IEE-Program"
              >
                Vermont’s Integrated Eligibility &amp; Enrollment Program
              </a>
            </li>
          </ul>
        </article>

        <article className="project project--hcgov">
          <div className="project__body">
            <h2 className="project__title">HealthCare.gov</h2>
            <p className="project__subtitle u-margin--0">
              Unravelling complex policies and improving an eligibility
              application for millions of Americans seeking health coverage.
            </p>
            <p>
              Since the launch of HealthCare.gov, over 23 million people have
              enrolled in health insurance, and America reached its lowest
              uninsured rate ever. At a high level, the HealthCare.gov
              application determines whether a person’s family is eligible for
              an insurance plan and whether they’re eligible for any cost
              savings to make their insurance more affordable. In addition, the
              application determines whether a person is eligible for Medicaid
              or the Children’s Health Insurance Program (CHIP), programs that
              provide free or low-cost health coverage to millions of Americans.
            </p>
            <p>
              It’s important that the process for applying and enrolling in
              health coverage is simple and accessible for everyone. To support
              that vision, I was part of the design team that tackled the
              challenge of determining how to redesign and structure the complex
              eligibility application experience on HealthCare.gov.
            </p>
          </div>

          <h3 className="heading project__links__heading">
            Read more about this work
          </h3>
          <ul className="project__links">
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/help-and-guidance-content-patterns-for-healthcare-gov-19997a1d7b1e"
              >
                Providing help and guidance to applicants
              </a>
            </li>
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6"
              >
                Structuring a complex eligibility form
              </a>
            </li>
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/form-design-approaches-for-downstream-effects-nonlinear-navigation-6bfe39e44f0c"
              >
                Form design approaches for downstream effects &amp; nonlinear
                navigation
              </a>
            </li>
          </ul>
        </article>

        <article className="project project--cms-ds">
          <div className="project__body">
            <h2 className="project__title">
              Centers for Medicare &amp; Medicaid Services (CMS) Design System
            </h2>
            <p>
              Oftentimes multiple contractors are responsible for different
              parts of complex initiatives, like HealthCare.gov, and each team
              has its own processes and codebases. Without a shared, living
              source of truth for UI standards, this results in fragmented and
              visually inconsistent user experiences. As part of the
              HealthCare.gov team, I led the design and technical implementation
              of the <a href="http://design.cms.gov">CMS Design System</a>, a
              set of open-source design and frontend development resources for
              creating Section 508 compliant, responsive, and consistent
              websites – based on the U.S. Web Design System.
            </p>
          </div>

          <h3 className="heading project__links__heading">
            Read more about this work
          </h3>
          <ul className="project__links">
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/healthcare-gov-design-system-fc27964a14c9"
              >
                Introducing a modern design system for HealthCare.gov
              </a>
            </li>
            <li>
              <a
                className="project__link"
                href="https://blog.navapbc.com/building-a-design-system-for-healthcare-gov-20dc1a833ab3"
              >
                Building a design system for HealthCare.gov
              </a>
            </li>
          </ul>
        </article>

        <article className="project project--highlights">
          <div className="project__body">
            <h2 className="project__title">Reading Highlights</h2>
            <p className="lead u-margin--0">
              Using a serverless approach, natural language processing, and
              email to export and remember takeaways from everything I read.
            </p>
            <p>
              After stewing in frustration for quite awhile about the current
              state of digital reading platforms, I decided to do what any sane
              programmer would do: Devise an overly complex solution for a
              seemingly simple problem. The prompt: How might I gather all my
              highlights from Kindle and put them into a personal online
              archive, where I can share, browse, and reflect on everything I’ve
              read? The result:{" "}
              <a href="http://highlights.sawyerh.com">highlights.sawyerh.com</a>
            </p>
          </div>

          <h3 className="heading project__links__heading">
            Read more about this work
          </h3>
          <ul className="project__links">
            <li>
              <a
                className="project__link"
                href="https://medium.com/@sawyerh/how-i-export-process-and-resurface-my-kindle-highlights-addc9de9af1a"
              >
                How I export, analyze, and resurface my Kindle highlights
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Page;
