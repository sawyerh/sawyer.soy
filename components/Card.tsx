import styles from "./Card.module.css";
import Markdown from "./Markdown";

interface CardProps {
  backgroundPosition?: string;
  body: string;
  imageUrl: string;
  imgAlt: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <Markdown content={props.body} />
      </div>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundPosition: props.backgroundPosition
            ? props.backgroundPosition
            : undefined,
        }}
      >
        <span className="sr-only">{props.imgAlt}</span>
      </div>
    </div>
  );
}
