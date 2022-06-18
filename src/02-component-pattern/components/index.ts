import { ProductButtons } from './ProductButtons'

import { ProductCard as ProuctCardHOC } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export { ProductButtons } from './ProductButtons'
// export { ProductCard } from './ProductCard'
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'

export const ProductCard = Object.assign(ProuctCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})
