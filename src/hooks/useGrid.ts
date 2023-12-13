export const useGrid = (number:number) => {
    let gridClass ;
    if(number && number === 3){
        gridClass = 'grid3'
    } else if (number === 2){
        gridClass = 'grid2'
    } else if (number = 1){
        gridClass = 'grid1'
    }

    return  {gridClass}
}