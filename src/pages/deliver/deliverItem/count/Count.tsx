import { useAppDispatch } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";
import { I_PizzaDeliver } from "@/store/pizza/PizzaType";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

interface I_Props {
  pizza: I_PizzaDeliver;
}

function Count(props: I_Props) {
  const { pizza } = props;
  const dispatch = useAppDispatch()

  const Plus = (id: number) => {
    dispatch(PizzaActions.setPlusDeliver(id));
  };

  const Minus = (id: number) => {
    dispatch(PizzaActions.setMinusDeliver(id));
  };
  return (
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
  );
}

export default Count;