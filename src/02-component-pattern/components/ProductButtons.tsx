import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import s from '../styles/styles.module.css'

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div className={s.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={s.buttonMinus}>
        -
      </button>
      <div className={s.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(+1)} className={s.buttonAdd}>
        +
      </button>
    </div>
  )
}
