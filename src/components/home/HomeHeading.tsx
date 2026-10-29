import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import styles from "./Home.module.css";

export function HomeHeading({ id, children }: { id: string; eyebrow?: string; children: string }) {
  return (
    <div className={styles.header}>
      <AnimatedTitle id={id} text={children} className={styles.heading} />
    </div>
  );
}
