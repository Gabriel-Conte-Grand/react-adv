import { useContext } from 'react'
import { ProductContext } from './ProductCard'

import s from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
  img?: string
  className?: string
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      className={`${s.productImg} ${className}`}
      src={imgToShow}
      alt='Product'
    />
  )
}
