import { MdOutlineCurrencyRuble } from "react-icons/md";
import styles from "./PizzaItem.module.scss";
import { Button, IconButton } from "@mui/material";
import { FaHeart, FaPlusSquare, FaRegHeart } from "react-icons/fa";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { I_Pizza } from "@/store/pizza/PizzaType";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";
import { useState } from "react";

interface I_Props {
  pizza: I_Pizza;
}

function PizzaItem(props: I_Props) {
  const { pizza } = props;
  const { id } = pizza;
  const { favourite } = useAppSelector((state) => state.PizzaReducer);
  const active = favourite.find((elem) => elem.id === id);
  const [activeFavourite, setActiveFavourite] = useState(Boolean(active));
  const dispatch = useAppDispatch();

  const handleClick = (item: I_Pizza) => {
    if (activeFavourite) {
      setActiveFavourite((prev) => !prev);
      dispatch(PizzaActions.setRemoveFavourite(item.id));
    } else {
      setActiveFavourite((prev) => !prev);
      dispatch(PizzaActions.setAddFavourite(item));
    }
  };

  const showModal = (pizza: I_Pizza) => {
    dispatch(PizzaActions.setModal(true));
    dispatch(PizzaActions.setPizzaModal(pizza));
  };

  return (
    <div key={pizza.id} className={styles.box_pizza}>
      <img src={pizza.imageUrl} alt="image" />
      <h2>{pizza.name}</h2>
      <div className={styles.bottom_box}>
        <h3 className={styles.price}>
          {pizza.price} <MdOutlineCurrencyRuble />
        </h3>
        <Button
          onClick={() => showModal(pizza)}
          variant="outlined"
          color="warning"
          endIcon={<FaPlusSquare />}
        >
          Выбрать
        </Button>
      </div>
      <div className={styles.favourite}>
        <IconButton onClick={() => handleClick(pizza)} color="warning">
          {activeFavourite ? <FaHeart /> : <FaRegHeart />}
        </IconButton>
      </div>
      {pizza.delivery && (
        <div className={styles.delivery}>
          <LocalShippingOutlinedIcon />
        </div>
      )}
    </div>
  );
}

export default PizzaItem;
