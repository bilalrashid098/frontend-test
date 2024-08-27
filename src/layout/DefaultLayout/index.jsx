import Header from "../header";
import styles from "./index.module.css";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
