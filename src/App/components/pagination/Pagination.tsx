import { useAppDispatch } from "@/hooks/useRedux";
import { FilterActions } from "@/store/pageCount/PageCount";
import { Pagination } from "@mui/material";

function Paginaton() {
  const dispatch = useAppDispatch();
  const { setPageCount } = FilterActions;

  return (
    <div>
      <Pagination
        count={3}
        onChange={(_, page) => dispatch(setPageCount(page))}
        size="large"
        color="standard"
      />
    </div>
  );
}

export default Paginaton;
