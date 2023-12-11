import Header from '@/App/components/header/Header'
import { useAppSelector } from '@/hooks/useRedux'
import MuiModal from '@/shared/ui/MuiModal/MuiModal'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  const {pizzaModal} = useAppSelector(state => state.PizzaReducer)
  return (
    <>
        <Header/>
        <Outlet/>
        <MuiModal pizza={pizzaModal}/>
    </>
  )
}

export default RootLayout