import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";

function Dropdown({ open = false, children }) {
  return (
    <div
      className={`${styles.container} ${!open ? styles.closed : styles.open}`}
    >
      {children}
    </div>
  );
}

Dropdown.Item = DropdownItem;

export default Dropdown;
