import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "@App/assets/pizza-logo.svg";
import { TextField } from "@mui/material";
import { HeaderStack } from "./headerStack";
import { useAppDispatch } from "@/hooks/useRedux";
import {PizzaActions} from '@/store/pizza/PizzaSlice'
import { useResponsive } from "@/hooks/useResponsive";

function Header() {
  const dispatch = useAppDispatch()
  const handleSearch = (value:string) => {
    dispatch(PizzaActions.setSearch(value))
  }
  const {isMobile} = useResponsive(600)

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_inner}>
          <div className={styles.header_left}>
            <Link to={"/"} className={styles.home}>
              <div className={styles.logo}>
                <img src={logo} />
              </div>
              {!isMobile && <div className={styles.header_logo_text}>
                <h2>REACT PIZZA</h2>
                <p>Есть то, что нас объединяет</p>
              </div>}
            </Link>
            <TextField
              label="Поиск..."
              type="search"
              variant="outlined"
              size="small"
              color="warning"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className={styles.header_right}>
            <HeaderStack/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
