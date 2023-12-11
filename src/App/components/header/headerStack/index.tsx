import { Stack, Tooltip, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/useRedux";

export const HeaderStack = () => {
  const { favourite } = useAppSelector((state) => state.PizzaReducer);
  const { deliver } = useAppSelector((state) => state.PizzaReducer);
  return (
    <Stack direction={"row"} spacing={1}>
      <Link to={"/deliver"}>
        <Tooltip title="Корзина">
          <IconButton>
            <Badge badgeContent={deliver.length} color="warning">
              <ShoppingCartIcon style={{ color: "rgb(0,0,0)" }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={"/favourite"}>
        <Tooltip title="Закладка">
          <IconButton>
            <Badge badgeContent={favourite.length} color="warning">
              <BookmarkIcon style={{ color: "rgb(0,0,0)" }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>
    </Stack>
  );
};
