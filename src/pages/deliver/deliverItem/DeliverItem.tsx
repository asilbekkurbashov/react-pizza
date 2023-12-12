import { I_PizzaDeliver } from "@/store/pizza/PizzaType";
import { CurrencyRuble, HighlightOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./DeliverItem.scss";
import { useAppDispatch } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";
import Count from "./count/Count";
import { useResponsive } from "@/hooks/useResponsive";

interface I_Props {
  pizza: I_PizzaDeliver;
}

function DeliverItem(props: I_Props) {
  const { pizza } = props;
  const dispatch = useAppDispatch();
  const { isMobile } = useResponsive(600);

  const RemovePizza = (pizza: I_PizzaDeliver) => {
    dispatch(PizzaActions.setRemoveDeliver(pizza));
  };

  return (
    <>
      <li key={pizza.id} className="li">
        <div className="pizza">
          <div className="image">
            <img src={pizza.img} alt={pizza.name} />
          </div>
          <div className="info">
            <h3>{pizza.name}</h3>
            <p>
              {pizza.type} тесто, {pizza.size} см
            </p>
          </div>
        </div>
        {!isMobile && (
          <>
            <div style={{ textAlign: "center" }}>
              <Count pizza={pizza} />
            </div>
            <div className="price">
              <h3>{pizza.price * pizza.count}</h3>
              <span>
                <CurrencyRuble />
              </span>
            </div>
          </>
        )}
        <div className="remove">
          <IconButton onClick={() => RemovePizza(pizza)}>
            <HighlightOff fontSize="large" />
          </IconButton>
        </div>
      </li>
      {isMobile && (
        <div className='for_mobile'>
          <div style={{ textAlign: "center" }}>
            <Count pizza={pizza} />
          </div>
          <div className="price">
            <h3>{pizza.price * pizza.count}</h3>
            <span>
              <CurrencyRuble />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default DeliverItem;
