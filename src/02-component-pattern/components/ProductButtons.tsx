import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import s from '../styles/styles.module.css'

interface Props {
  className?: string
}

export const ProductButtons = ({ className }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div className={`${s.buttonsContainer} ${className}`}>
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
