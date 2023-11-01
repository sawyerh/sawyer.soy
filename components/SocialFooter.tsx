import styles from "./SocialFooter.module.css";

const items: Array<{
  label: string;
  link: string;
}> = [
  {
    label: "Twitter",
    link: "https://twitter.com/sawyerh",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sawyerh/",
  },
  {
    label: "Mastodon",
    link: "https://twitter.com/sawyerh",
  },
  {
    label: "GitHub",
    link: "https://twitter.com/sawyerh",
  },
];

export default function SocialFooter() {
  return (
    <div className="my-md">
      <h2 className="subhead--marker">Contact</h2>

      {items.map((item) => (
        <a href={item.link} key={item.label} className={styles["item"]}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
