import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import styles from "./Home.module.css";

export function HomeHeading({ id, children, as = "h2" }: { id: string; eyebrow?: string; children: string; as?: "h1" | "h2" }) {
  return (
    <div className={styles.header}>
      <AnimatedTitle as={as} id={id} text={children} className={styles.heading} />
    </div>
  );
}
