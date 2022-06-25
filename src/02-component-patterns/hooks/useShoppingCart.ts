import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces'

export const useShopingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((prevCart) => {
      if (count === 0) {
        //2 FORMAS

        // const newCart = prevCart
        // delete newCart[product.id]
        // return {
        //   ...newCart,
        // }

        const { [product.id]: toDelete, ...rest } = prevCart
        return { ...rest }
      }

      return {
        ...prevCart,
        [product.id]: { ...product, count },
      }
    })
  }

  return {
    onProductChange,
    shoppingCart,
  }
}
