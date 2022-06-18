import { useContext } from 'react'
import { ProductContext } from './ProductCard'

import s from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return <img className={s.productImg} src={imgToShow} alt='Product' />
}
