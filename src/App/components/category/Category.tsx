import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useResponsive } from "@/hooks/useResponsive";
import { category } from "@/shared/data/data";
import { dark, grey } from "@/shared/ui/createTheme";
import { CategoryActions } from "@/store/category/CategorySlice";
import { Button, Stack, ThemeProvider } from "@mui/material";

function Category() {
  const dispatch = useAppDispatch();
  const { categoryType } = useAppSelector((state) => state.CategoryReducer);
  const handleCategory = (value: string) => {
    dispatch(CategoryActions.setCategoryType(value));
  };
  const {isMobile} = useResponsive(600)

  return (
    <Stack direction={"row"} spacing={2}>
      {category.map((elem) => (
        <ThemeProvider
          theme={elem.type === categoryType ? dark : grey}
          key={elem.id}
        >
          <Button
            key={elem.id}
            onClick={() => handleCategory(elem.type)}
            variant="contained"
            color="neutral"
            size={isMobile ? 'small' : 'medium'}
          >
            {elem.name}
          </Button>
        </ThemeProvider>
      ))}
    </Stack>
  );
}

export default Category;
