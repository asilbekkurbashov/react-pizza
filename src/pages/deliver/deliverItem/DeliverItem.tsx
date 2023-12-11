import { I_PizzaDeliver } from "@/store/pizza/PizzaType";
import {
  AddCircle,
  RemoveCircle,
  CurrencyRuble,
  HighlightOff,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import "./DeliverItem.scss";
import { useAppDispatch } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";

interface I_Props {
  pizza: I_PizzaDeliver;
}

function DeliverItem(props: I_Props) {
  const { pizza } = props;
  const dispatch = useAppDispatch();

  const RemovePizza = (pizza:I_PizzaDeliver) => {
    dispatch(PizzaActions.setRemoveDeliver(pizza))
  }

  const Plus = (id: number) => {
    dispatch(PizzaActions.setPlusDeliver(id));
  };

  const Minus = (id: number) => {
    dispatch(PizzaActions.setMinusDeliver(id));
  };

  return (
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
      <div style={{ textAlign: "center" }}>
        <Stack className="count" direction={"row"}>
          <IconButton
            onClick={() => Minus(pizza.extraId)}
            aria-label="minus"
            color="warning"
            disabled={pizza.count === 1}
          >
            <RemoveCircle fontSize="large" />
          </IconButton>
          <h2>{pizza.count}</h2>
          <IconButton
            onClick={() => Plus(pizza.extraId)}
            color="warning"
            aria-label="plus"
          >
            <AddCircle fontSize="large" />
          </IconButton>
        </Stack>
      </div>
      <div className="price">
        <h3>{pizza.price * pizza.count}</h3>
        <span>
          <CurrencyRuble />
        </span>
      </div>
      <div className="remove">
        <IconButton onClick={() => RemovePizza(pizza)}>
          <HighlightOff fontSize="large" />
        </IconButton>
      </div>
    </li>
  );
}

export default DeliverItem;
