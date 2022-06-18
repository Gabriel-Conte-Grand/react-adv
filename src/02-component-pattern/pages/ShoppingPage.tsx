import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import coffee from './coffee-mug.png'
const product = {
  id: '1',
  title: 'Coffee Mug',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image img='' />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        {/* FORMA tradicional--> */}
        <ProductCard product={product}>
          <ProductImage img='' />
          <ProductTitle title='Titulo en etiqueta' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
