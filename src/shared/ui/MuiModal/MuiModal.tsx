import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";
import { I_Pizza } from "@/store/pizza/PizzaType";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import { FaCircleXmark } from "react-icons/fa6";
import { Backdrop, Box, Modal, Button, Stack, IconButton } from "@mui/material";
import "./MuiModal.scss";
import { useState } from "react";
import { clsx } from "@/helper/clsx";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

interface I_Props {
  pizza: I_Pizza | null;
}

function MuiModal(props: I_Props) {
  const { pizza } = props;
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.PizzaReducer);
  const [indexSize, setIndexSize] = useState(1);
  const [indexType, setIndexType] = useState(0);
  const size = indexSize === 0 ? 25 : indexSize === 1 ? 30 : 35;
  const type = indexType === 0 ? "Традиционное" : "Тонкое";

  const handleClose = () => {
    dispatch(PizzaActions.setPizzaModal(null));
    dispatch(PizzaActions.setModal(false));
    setIndexSize(1);
    setIndexType(0);
  };

  const handelIndexSize = (i: number) => {
    setIndexSize(i);
    setIndexType(0);
  };
  const handleIndexType = (i: number) => {
    setIndexType(i);
  };

  const addDeliver = (pizza: I_Pizza | null) => {
    if (pizza) {
      const newPizzaDeliver = {
        id: pizza.id,
        extraId: Date.now(),
        img: pizza.imageUrl,
        name: pizza.name,
        size: pizza.sizes[indexSize].size,
        type: pizza.sizes[indexSize].type[indexType].typeName,
        price: pizza.sizes[indexSize].price,
        count: 1,
      };
      dispatch(PizzaActions.setAddDeliver(newPizzaDeliver));
    }
    handleClose();
  };

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal_inner">
          <div className="modal_pizza_left">
            <div className="modal_pizza-img">
              <img
                src={pizza?.imageUrl}
                className={clsx([], {
                  small: Boolean(indexSize === 0),
                  medium: Boolean(indexSize === 1),
                  large: Boolean(indexSize === 2),
                })}
                alt="pizza"
              />
            </div>
          </div>
          <div className="modal_pizza_right">
            <h2>{pizza?.name}</h2>
            <p>
              {size} см {type} тесто{" "}
            </p>
            <p>{pizza?.desc}</p>
            <Stack className="stackSize" direction="row">
              {pizza &&
                pizza.sizes.map((prev, i) => (
                  <Button
                    key={prev.id}
                    onClick={() => handelIndexSize(i)}
                    variant={indexSize === i ? "contained" : "text"}
                    color="warning"
                  >
                    {prev.size}
                  </Button>
                ))}
            </Stack>
            <Stack className="stackType" direction="row">
              {pizza &&
                pizza.sizes[indexSize].type.map((prev, i) => (
                  <Button
                    key={prev.id}
                    onClick={() => handleIndexType(i)}
                    disabled={!prev.isShow}
                    variant={indexType === i ? "contained" : "text"}
                    color="warning"
                  >
                    {prev.typeName}
                  </Button>
                ))}
            </Stack>
            <Button
              onClick={() => addDeliver(pizza)}
              className="btn_buy"
              color="warning"
              variant="contained"
            >
              Добавить в корзину за {pizza && pizza.sizes[indexSize].price}{" "}
              <MdOutlineCurrencyRuble />
            </Button>
            <div className="closeModal">
              <IconButton onClick={handleClose}>
                <FaCircleXmark />
              </IconButton>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default MuiModal;
