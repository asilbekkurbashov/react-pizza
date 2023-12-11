import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { sort } from '@/shared/data/data'
import { SortActions } from '@/store/sort/SortSlice';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function Sort() {
    const { sortValue } = useAppSelector((state) => state.SortReducer);
    const dispatch = useAppDispatch()
    const handleSort = (value: string) => {
        dispatch(SortActions.setSort(value));
      };
  return (
    <Box width={200}>
          <FormControl fullWidth variant="standard" color="warning">
            <InputLabel id="demo-simple-select-label">Сортировка по</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Сортировка по"
              value={sortValue}
              size={'small'}
            >
              {sort.map((elem) => (
                <MenuItem
                  onClick={() => handleSort(elem.name)}
                  key={elem.name}
                  value={elem.name}
                >
                  {elem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
  )
}

export default Sort