import styles from './Empty.module.scss'
import empty from '@App/assets/empty-cart.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface I_Props {
    title: string,
    text1: string,
    text2: string
}

function Empty(props:I_Props ) {
    const {title, text1, text2} = props
    const navigate = useNavigate()
    return (
        <div className={styles.empty}>
            <h3>{title} пустая 😕</h3>
            <p>Вероятней всего, вы не {text1} ещё пиццу. Для того, чтобы {text2} пиццу, перейди на главную страницу</p>
            <img src={empty} alt="empty" />
            <div>
                <Button variant='contained' onClick={() => navigate('/')} color='warning'>Вернуться назад</Button>
            </div>
        </div>
    )
}

export default Empty