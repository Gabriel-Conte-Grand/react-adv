import s from '../styles/styles.module.css'
import '../styles/custom-styles.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}

export function ProductCard({ product, children, className, style }: Props) {
  const { counter, increaseBy } = useProduct()

  // const { id, title, img } = product

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${s.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
