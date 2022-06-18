import s from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, ProductProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export function ProductCard({ product, children }: ProductProps) {
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
      <div className={s.productCard}>{children}</div>
    </Provider>
  )
}
