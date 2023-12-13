import Empty from "@/App/components/empty/Empty";
import styles from "./Favourite.module.scss";
import { useAppSelector } from "@/hooks/useRedux";
import { IconButton } from "@mui/material";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MuiDiaolog from "@/shared/ui/MuiDiaolog/MuiDiaolog";
import PizzaItem from "@/App/components/showPizzas/pizzaItem/PizzaItem";

function Favourite() {
  const { favourite } = useAppSelector((state) => state.PizzaReducer);
  const navigate = useNavigate();
  return (
    <div className={styles.favourite}>
      <div className="container">
        {!favourite.length ? (
          <Empty title="Закладка " text1="добавляли" text2="добавлять" />
        ) : (
          <>
            <div className={styles.div}>
              <div className={styles.back}>
                <h1>Закладка</h1>
                <IconButton
                  onClick={() => navigate("/")}
                  style={{ fontSize: "35px" }}
                  color="warning"
                  size="small"
                >
                  <BiSolidLeftArrowSquare />
                </IconButton>
              </div>
              <div className={styles.delete}>
                <MuiDiaolog title="Закладка" text="закладку" />
              </div>
            </div>
            <div className={styles.show_pizzas}>
              {favourite.map((elem) => (
                <PizzaItem pizza={elem} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Favourite;
