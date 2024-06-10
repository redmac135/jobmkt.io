import styles from "./DropdownItem.module.css";

export default function DropdownItem({ children }) {
  return <div className={styles.container}>{children}</div>;
}
