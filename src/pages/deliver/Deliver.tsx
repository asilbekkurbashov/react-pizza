import Empty from "@/App/components/empty/Empty";
import styles from "./Deliver.module.scss";
import { useAppSelector } from "@/hooks/useRedux";
import MuiDiaolog from "@/shared/ui/MuiDiaolog/MuiDiaolog";
import DeliverItem from "./deliverItem/DeliverItem";
import { Button } from "@mui/material";
import { MdChevronLeft, MdOutlineCurrencyRuble } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "@/hooks/useResponsive";

function Deliver() {
  const { deliver } = useAppSelector((state) => state.PizzaReducer);
  const navigate = useNavigate();
  const { isMobile } = useResponsive(600);
  const pizzaNumber = deliver
    .map((prev) => prev.count)
    .reduce((a, b) => a + b, 0);
  const allPrice = deliver
    .map((prev) => prev.price * prev.count)
    .reduce((a, b) => a + b, 0);
  return (
    <div className={styles.deliver}>
      <div className="container">
        {!deliver.length ? (
          <Empty title="Корзина " text1="заказывали" text2="заказать" />
        ) : (
          <>
            <div className={styles.deliver_inner}>
              <div className={styles.div}>
                <div>
                  <h1>Корзина</h1>
                </div>
                <div>
                  <MuiDiaolog title="Корзина" text="корзину" />
                </div>
              </div>
              <ul className={styles.ul}>
                {deliver.map((elem) => (
                  <DeliverItem key={elem.extraId} pizza={elem} />
                ))}
              </ul>
              <div className={styles.back_pay}>
                <div className={styles.back}>
                  <p>
                    Всего пицц: <span>{pizzaNumber} шт.</span>
                  </p>
                  <Button
                    onClick={() => navigate("/")}
                    variant="outlined"
                    size="small"
                    color="success"
                    startIcon={<MdChevronLeft />}
                    style={{ fontSize: isMobile ? "11px" : "14px" }}
                  >
                    Вернуться назад
                  </Button>
                </div>
                <div className={styles.pay}>
                  <p>
                    Сумма заказа:{" "}
                    <span className={styles.allSum}>
                      {allPrice} <MdOutlineCurrencyRuble />
                    </span>
                  </p>
                  <Button
                    color="warning"
                    size="small"
                    variant="contained"
                    style={{ fontSize: isMobile ? "11px" : "14px" }}
                  >
                    Оплатить сейчас
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Deliver;
