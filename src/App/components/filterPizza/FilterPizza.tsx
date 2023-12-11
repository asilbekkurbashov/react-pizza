import styles from "./FilterPizza.module.scss";
import Sort from "../sort/Sort";
import Category from "../category/Category";
import { useResponsive } from "@/hooks/useResponsive";

function FilterPizza() {
  const {isMobile} = useResponsive(954)
  return (
    <div className={styles.filter}>
      <div className={styles.filter_left}>
        <Category/>
      </div>
      <div className={styles.filter_right}>
        {!isMobile && <Sort/>}
      </div>
    </div>
  );
}

export default FilterPizza;
